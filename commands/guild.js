const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
        // Lets define our array of guilds
        
        const guildArray = client.guilds.map((guild) => {
        return `Server: ${guild.name}`
        })
      var embed = new Discord.RichEmbed()
        .setDescription(`\`\`\`${guildArray.join("\n")}\`\`\``)
        .setColor("FF4654")
        // And send it
        message.channel.send(embed)
      }
    exports.help = {
  name: "guild",
  description: "DM Someone",
  usage: "help"
}