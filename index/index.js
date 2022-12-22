// Require the necessary discord.js classes
const fs = require('node:fs');
const path = require('node:path');
const { Client, GatewayIntentBits, Partials, GuildMember, MembershipScreeningFieldType, Events } = require('discord.js');
const { token } = require('./config.json');
const { Collection } = require('discord.js');
const { ReactionRole } = require("discordjs-reaction-role");
const roleClaim = require('./rules');
const rRoles = require('./roles');
const about = require('./aboutUs');
const keep_alive = require('./keepAlive.js');

// Create a new client instance
const client = new Client({ 
  	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMembers],
	partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

// Login to Discord with your client's token
client.login(token);

// Command handling
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

keep_alive();
// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
	client.user.setPresence({ activities: [{ name: 'googling with cooglers!' }], status: 'online' });
	// roleClaim(client);
	// rRoles(client);
	// about(client);
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

const rr = new ReactionRole(client, [
	{ messageId: "1053815862685081631", reaction: "1000228885155283066", roleId: "999106560531890186" }, // coogler role
	{ messageId: "1054221540998254632", reaction: "🔵", roleId: "999561027769352283" }, // freshman role
	{ messageId: "1054221540998254632", reaction: "🟢", roleId: "999561495505535078" }, // sophomore role
	{ messageId: "1054221540998254632", reaction: "🟡", roleId: "999561566133432392" }, // junior role
	{ messageId: "1054221540998254632", reaction: "🔴", roleId: "999561764196855898" }, // senior role
	{ messageId: "1054221540998254632", reaction: "🟣", roleId: "1021244761933348864" }, // graduate role
	{ messageId: "1054221542025867285", reaction: "💻", roleId: "1053894132684292116" }, // cs major role
	{ messageId: "1054221542025867285", reaction: "📊", roleId: "1053894213693096027" }, // mis major role
	{ messageId: "1054221542025867285", reaction: "📈", roleId: "1053894389807710310" }, // business major role
	{ messageId: "1054221542747287662", reaction: "🏫", roleId: "1054222191593533511" }, // uh main role
	{ messageId: "1054221542747287662", reaction: "🏙️", roleId: "1054222211994632203" }, // uhd role
	{ messageId: "1054221542747287662", reaction: "🌅", roleId: "1054222216696438856" }, // uhcl role
	{ messageId: "1054221542747287662", reaction: "🌳", roleId: "1054222219858956429" }, // uh sugar land role
	{ messageId: "1054221542747287662", reaction: "🕍", roleId: "1054222222920781864" }, // uh victoria role
	{ messageId: "1054221542747287662", reaction: "‼️", roleId: "1054222225428983851" }, // non uh role
	{ messageId: "1054221543477084251", reaction: "1000231174863597710", roleId: "1053903077620592741" }, // gNotifs role
]);

client.on('guildMemberUpdate', (before, after) => {
	const channel = client.channels.cache.get('1001606551682940988');
	if(before.pending != after.pending) {
		const msg = `<:gdsc:1000228885155283066> Welcome to GDSC <@${after.user.id}>! Please head over to <#999095955116789800> to accept our rules and become a Coogler! <:gdsc:1000228885155283066>`;
		channel.send(msg);
	}
});

client.on('messageReactionAdd', (reaction, user) => {
    if (user.bot) return;
		try {
			if (reaction.emoji.name == "✅" && reaction.message.channel.id == "1054174342025592915") {
    			reaction.message.delete();
			}
		} catch (error) {
			console.log(error);
		}
})