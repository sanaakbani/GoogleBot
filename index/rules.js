const { EmbedBuilder } = require('discord.js');

module.exports = client => {
  const channelId = '999095955116789800';
  const channel = client.channels.cache.get('999095955116789800');

  const redHex = '0xFF0000';
  const yellowHex = '0xFFCD01';
  const greenHex = '0x4CAF50';
  const blueHex = '0x0099FF';
  const whiteHex = '0x000000';
  
  const firstRule = new EmbedBuilder()
	.setColor(redHex)
	.setTitle('Be respectful to each other.')
	.setDescription("Treat everyone with respect. All forms of communication should not demean others. Consider what you are saying and how it would feel if it were said to you or about you.");

  const secondRule = new EmbedBuilder()
	.setColor(yellowHex)
	.setTitle('Be kind and civil to others.')
	.setDescription("Participate while acknowledging that everyone deserves to be here — and each of us has the right to enjoy our experience without fear of harassment, discrimination, or condescension, whether blatant or via micro-aggressions.");

  const thirdRule = new EmbedBuilder()
	.setColor(greenHex)
	.setTitle('Do not spam, manipulate engagement, or disrupt other people’s experience in this club.');

  const fourthRule = new EmbedBuilder()
	.setColor(blueHex)
	.setTitle('Do not share content or misinformation about anyone or violate their intellectual property and/or other rights.');

  const fifthRule = new EmbedBuilder()
	.setColor(whiteHex)
	.setTitle('Please speak up if you see or hear something!')
	.setDescription("Harassment is not tolerated, and you are empowered to politely engage when you or others are disrespected. We have a **ZERO TOLERANCE POLICY** for harassment of any kind, including but not limited to: \n\n> Offensive Language \n> Sexual Imagery and Language \n> Unwelcomed Sexual or Physical Attention \n> Cyber Threats \n> Race and/or Color \n> Gender & Sexuality \n> Age & Appearance \n> Disability");

  const rulesMsg = "<:gdsc:1000228885155283066>" + " **Rules:** " + "<:gdsc:1000228885155283066>";
  channel.send(rulesMsg);
  channel.send({ embeds: [firstRule, secondRule, thirdRule, fourthRule, fifthRule] });
  const reactMsg = "**React with '<:gdsc:1000228885155283066>' to agree to the rules and become a Coogler!**";
  channel.send(reactMsg).then( async msg => {
		msg.react("1000228885155283066")})
}