const Discord = require('discord.js');
exports.run = (client, message, args) => {
	var m = args.join(' ');
  message.delete()
	if (!m) return message.reply('Isi teks apapun.');
	const embed = new Discord.RichEmbed()
		.setDescription(m)
		.setColor(["#ff4654"])
    .setFooter(`Valorant Community Announcement`);
	message.channel.send({ embed });
};

exports.help = {
  name: "embed",
  description: "DM Someone",
  usage: "help"
}