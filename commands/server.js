const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
   const role = message.guild.roles.size;
   const online = message.guild.members.filter(m => m.presence.status != 'offline').size
   const verificationLevels = ['**None! <:VALORANT:691976250943864872>**', '**Low Level! <:4314_gaypanicmonkas:695843250707103784>**', '**Medium Level!<a:kdab:704331825308237934>**', '**Insane Level! <:cryariver:704591957254733936>**', '**Extreme Level! <:ehehe2:704591957581627474>**'];
  var regions =  {
			singapore: 'Singapore :flag_sg:',
      japan: 'Japan :flag_jp:',
      hongkong: 'Hong Kong :flag_hk:'
		}
      const embed = new Discord.RichEmbed()
     .setAuthor(`${message.guild.name}`, message.guild.iconURL)
     .setColor("#ff4654")
      .setThumbnail(message.guild.iconURL)
      .setDescription(`:robot: : ${message.guild.owner.user.tag} \n:id: : ${message.guild.owner.id}`)
      .addField('`Member Count`', `Member: **${message.guild.memberCount}**`, true)
      .addField('`Online`', `Online: **${online}**`, true)
			.addField('`Region`', `Region: **${regions[message.guild.region]}**`, true)
      .addField('`Created At`', `Created at: **${message.guild.createdAt.toLocaleString()}**`, true)
      .addField("`Verification Level`", `Verification Server: ${verificationLevels[message.guild.verificationLevel]}`)
      .addField('`Voice Channels`' , `Size Voice: **${message.guild.channels.filter(chan => chan.type === 'voice').size}**`)
      .addField('`Text Channels`' , `Size Text: **${message.guild.channels.filter(chan => chan.type === 'text').size}**`, true)
      .addField('`Roles`', `Size Roles: **${role}**`, true)
      message.channel.send({embed}) 
}
exports.help = {
  name: "server",
  description: "DM Someone",
  usage: "help"
}