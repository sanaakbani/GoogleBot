const { EmbedBuilder } = require('discord.js');

module.exports = client => {
  const channel = client.channels.cache.get('1054253097683275807');
  const redHex = '0xFF0000';
  const yellowHex = '0xFFCD01';
  const greenHex = '0x4CAF50';
  const blueHex = '0x0099FF';
  const whiteHex = '0x000000';
  
  const gdscMsg = new EmbedBuilder()
	.setColor(redHex)
	.setTitle('What are Google Developer Student Clubs?')
	.setDescription("Google Developer Student Clubs, powered by Google, are university based community groups for students interested in Google developer technologies. We help students bridge the gap between theory and practice.");

    // channel.send({embeds: [gdscMsg]});

  const gdscUH = new EmbedBuilder()
	.setColor(yellowHex)
	.setTitle('Why should I join GDSC @ UH?')
	.setDescription("All majors are welcome! Whether you're interested in technical or non-techincal roles, we highly recommend you to join. At GDSC, you can earn swag, gain mentorship, and grow as a Google developer.");

//   channel.send({embeds: [gdscUH]});

  const benefitsMsg = new EmbedBuilder()
	.setColor(greenHex)
	.setTitle('Benefits of being a paid member!')
	.setDescription("As a paid member, you will get \n\n> **Access to exclusive swag** \n> **A free t-shirt!** \n> **Access to referrals for Google!**");
//   channel.send({embeds: [benefitsMsg]});

  const socialsMsg = new EmbedBuilder()
	.setColor(blueHex)
    .setTitle("Our Socials")
	.setDescription("**Instagram** \nhttps://www.instagram.com/uh.gdsc/ \n\n **Twitter** \n https://twitter.com/uh_gdsc \n\n **Facebook** \n  https://www.facebook.com/uhgdsc \n\n **Linktree** \n https://linktr.ee/uhgdsc \n\n **Website** \n https://gdsc.community.dev/university-of-houston/");

  channel.send({embeds: [gdscMsg, gdscUH, benefitsMsg, socialsMsg]});
}