const Discord = require('discord.js')

module.exports.run = (bot, message, args, tools) => {

  var LuckNumber = Math.floor((Math.random() * 12000) + 0.120);
  const numEmb = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setAuthor('LUCKY NUMBER', 'https://vignette.wikia.nocookie.net/nintendo/images/0/02/Question_Block_NSMB.png/revision/latest?cb=20151206055532&path-prefix=en')
  .addField('And your lucky number is...', `${LuckNumber}!`);
  message.channel.send({embed: numEmb})

}

exports.help = {
  name: "luckynum",
  description: "DM Someone",
  usage: "help"
}