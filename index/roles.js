const { EmbedBuilder } = require('discord.js');

module.exports = client => {
  const channel = client.channels.cache.get('1000797024008032266');
  const redHex = '0xFF0000';
  const yellowHex = '0xFFCD01';
  const greenHex = '0x4CAF50';
  const blueHex = '0x0099FF';
  const whiteHex = '0x000000';
  
  const classMsg = new EmbedBuilder()
	.setColor(redHex)
	.setTitle('React for your classification!')
	.setDescription("🔵 - Freshman \n\n 🟢 - Sophomore \n\n 🟡 - Junior \n\n 🔴 - Senior \n\n 🟣 - Graduate \n");

  // const classMsg = "React for your classification!\n\n 🔵 - Freshman \n\n 🟢 - Sophomore \n\n 🟡 - Junior \n\n 🔴 - Senior \n\n 🟣 - Graduate \n";
  channel.send({embeds: [classMsg]}).then( async msg => {
		msg.react("🔵").then(
      msg.react("🟢").then(
        msg.react("🟡").then(
          msg.react("🔴").then(
            msg.react("🟣")
          )
        )
      )
    )
  })

  const majorMsg = new EmbedBuilder()
	.setColor(greenHex)
	.setTitle('React for your major!')
	.setDescription("💻 - CS/CIS \n\n 📊 - MIS \n\n 📈 - Business \n\n ✅ - Other");

  // const majorMsg = "React for your major!\n\n 💻 - CS/CIS \n\n 📊 - MIS \n\n 📈 - Business \n\n ✅ - Other";
  channel.send({embeds: [majorMsg]}).then( async msg => {
		msg.react("💻").then(
      msg.react("📊").then(
        msg.react("📈").then(
          msg.react("✅")
        )
      )
    )
  })

  const campusMsg = new EmbedBuilder()
	.setColor(greenHex)
	.setTitle('React for your campus!')
	.setDescription("🏫 - UH Main \n\n 🏙️ - UHD \n\n 🌅 - UHCL \n\n 🌳 - UH Sugar Land \n\n 🕍 - UH Victoria \n\n ‼️ - Non-UH Student");
  channel.send({embeds: [campusMsg]}).then( async msg => {
		msg.react("🏫").then(
      msg.react("🏙️").then(
        msg.react("🌅").then(
          msg.react("🌳").then(
            msg.react("🕍").then(
              msg.react("‼️")
            )
          )
        )
      )
    )
  })

  const googleOppsMsg = new EmbedBuilder()
	.setColor(blueHex)
	.setDescription(`**React with '<:superg:1000231174863597710>' if you'd like to receive notifications for all Google events!**`);

  // const googleOppsMsg = `**React with '<:superg:1000231174863597710>' if you'd like to receive notifications for all Google-related events!**`;
  channel.send({embeds: [googleOppsMsg]}).then( async msg => {
		msg.react("<:superg:1000231174863597710> ")
  })
}