const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
  message.delete(5000)
  var regions =  {
			singapore: 'Singapore :flag_sg:',
      japan: 'Japan :flag_jp:',
      hongkong: 'Hong Kong :flag_hk:'
		}
  const embed = new Discord.RichEmbed()
     .setAuthor(`${message.guild.name}`, message.guild.iconURL)
     .setColor("#ff4654")    
		 .addField('`Region`', `Region: **${regions[message.guild.region]}**`, true)
      message.channel.send({embed}) 
  }

exports.help = {
  name: "region",
  description: "DM Someone",
  usage: "help"
}