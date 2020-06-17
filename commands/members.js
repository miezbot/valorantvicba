const Discord = require('discord.js');

exports.run = (client, message, args) => {

	message.channel.send({
			embed: {
					color: 16729684,
					author: {
							name: client.user.username,
							icon_url: client.user.displayAvatarURL
					},
					fields: [{
									name: "`• Members:`",
									value: `${message.guild.memberCount}`
							}, {
									name: "`• Humans:`",
									value: `${message.guild.members.filter(member => !member.user.bot).size}`
							}, {
									name: "`• Bots:`",
									value: `${message.guild.members.filter(member => member.user.bot).size}`
							}, {
									name: "`• Members Status:`",
									value: `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Online\n** ${message.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb\n** ${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming`
					}]
			}
	})
};

exports.help = {
  name: "members",
  description: "DM Someone",
  usage: "help"
}