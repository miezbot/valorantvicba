const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    if (!args[0]) {
        return message.channel.send(`2 Pilihan!.`);
    }
    let choices = args;
    if (choices.length < 2) {
        return message.channel.send(`Minimal 2 Pilihan.`);
    }
    let choice = choices[Math.floor(Math.random() * choices.length)].trim();
  var embed = new Discord.RichEmbed()
    .setDescription(`Aku memilih : ${choice}!`)
    .setColor("FF4654")
    message.channel.send(embed);
    }

exports.help = {
  name: "choose",
  description: "DM Someone",
  usage: "help"
}