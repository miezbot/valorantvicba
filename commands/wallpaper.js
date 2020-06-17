const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, tools) => {
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/wallpaper");
    
    const embed = new Discord.RichEmbed()
    .setTitle("Wallpaper Valorant")
    .setColor("#ff9900")
    .setImage(body.url) 
    message.channel.send(embed)
};
exports.help = {
  name: "wallpaper",
  description: "DM Someone",
  usage: "help"
}