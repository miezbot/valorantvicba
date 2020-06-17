const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let msg = await message.channel.send("Generating icon...");

if(!message.guild.iconURL) return msg.edit("Tidak ditemukan!");

let iconembed = new Discord.RichEmbed()
.setColor("00ff00")
.setFooter("Pengunaan oleh " + message.author.tag)
.setImage(message.guild.iconURL('gif'))
.setTitle("Guild icon")
.setDescription("[Link ICON]("+message.guild.iconURL+")")

message.channel.send(iconembed)
    
    msg.delete();
 }


exports.help = {
  name: "servericon",
  description: "DM Someone",
  usage: "help"
}