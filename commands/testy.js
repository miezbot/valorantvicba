const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("Mention dlu mas ");
    if(!message.channel.nsfw) return message.reply("NSFW belum nyala");
    if(message.mentions.users.first().id === "658775619659890741") return message.reply('AJING G BISA');
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/spank");
    
    const embed = new Discord.RichEmbed()
    .setColor("#ff4654")
    .setTitle(`${message.mentions.users.first().username}, Ga tau lah apani  ${message.author.username} >:3`)
    .setImage(body.url) 
    message.channel.send(embed)
};

exports.help = {
  name: "spank",
  description: "DM Someone",
  usage: "help"
}