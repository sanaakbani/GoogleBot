const firstMessage = require('./firstMessage')

module.exports = client => {
  const channelId = '1000955442589093999';

  const getEmoji = key => client.emojis.cache.find(emoji => emoji.name === key);

  const emojis = {
    gdsc: 'Coogler'
  }

  const reactions = [];

  for(const key in emojis) {
    const emoji = getEmoji(key);
    reactions.push(emoji);
  }
  
  firstMessage(client, channelId, 'React to become a Coogler!', reactions);

  const handleReaction = (reaction, user, add) => {
    if(user.bot)
      return;

    const emoji = reaction._emoji.name;
    const { guild } = reaction.message;
    const roleName = emojis[emoji];
    if(!roleName)
      return;

    const role = guild.roles.cache.find(role => role.name === roleName);
    const member = guild.members.cache.find(member => member.id === user.id);

    if(add) {
      member.roles.add(role);
    } else {
      member.roles.remove(role);
    }
  }

  client.on('messageReactionAdd', (reaction,user) => {
    if(reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, true);
    }
  });

  client.on('messageReactionRemove', (reaction,user) => {
    if(reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, false);
    }
  });
  
}