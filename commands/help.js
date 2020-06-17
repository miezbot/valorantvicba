const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.delete()
	const embed = new Discord.RichEmbed()
		.setDescription("**Pulic Available Command :**\n`v!avatar`\t`v!feedback`\t`v!about`\n\n > Maaf Bot ini bersifat pribadi/private.")
		.setColor("#313338")
    .setFooter(`Valorant Community Announcement`);
	message.channel.send({ embed });
};

exports.help = {
  name: "help",
  description: "DM Someone",
  usage: "help"
}