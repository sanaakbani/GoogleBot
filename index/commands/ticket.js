const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

const channelId = "";

module.exports = {
    data: new SlashCommandBuilder()
		.setName('ticket')
		.setDescription('Opens a support ticket!')
        .addStringOption(option =>
            option.setName('message')
                .setDescription('Your message').setRequired(true)),
	async execute(interaction) {
		await interaction.reply({ content: 'Your ticket has been sent!', ephemeral: true });
        const supportTicket = new EmbedBuilder()
	    .setColor('White')
	    .setTitle(`New Ticket created!`)
	    .setDescription(`${interaction.user} opened a support request:
        
        "${interaction.options.getString('message')}"
        
        React with '✅' to resolve this issue.`);

        interaction.client.channels.cache.get("1054174342025592915")
        .send({embeds: [supportTicket]}).then( async msg => { msg.react('✅'); });
        
        const userMsg = new EmbedBuilder()
	    .setColor('White')
	    .setTitle(`You submitted a support request!`)
	    .setDescription(`Here's what we got:
        
        "${interaction.options.getString('message')}"
        
        Thank you for reeaching out to us. We will try to resolve it as soon as possible!`);
        interaction.user.send({embeds: [userMsg]});
	}
};