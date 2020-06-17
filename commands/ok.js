const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.delete()
	const embed = new Discord.RichEmbed()
		.setDescription("> **Update** \n> Sekarang kami telah memperbarui `Role Region` yaitu Region `South Korea` \n> *Sarangheyoo* :kissing_heart:  yuk.. diambil <a:jettknife:704006278023872542>")
		.setColor("#313338")
    .setImage("https://media.giphy.com/media/UkYA557fdMYTe/giphy.gif")
    .setFooter(`Valorant Community Announcement`);
	message.channel.send({ embed });
};

exports.help = {
  name: "ok",
  description: "DM Someone",
  usage: "help"
}


///AFKK DLU KAKAK >//<