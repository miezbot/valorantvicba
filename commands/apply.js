const Discord = require("discord.js")
exports.run = async function (bot, message) {
  message.channel.send('Are You Sure You Would Like To Create A Developer Application? (Yes/No)').then(() => {
      message.channel.awaitMessages(response => response.author === message.author, {
          max: 1,
          time : 10000,
      }).then(() => {
          if(message.author.lastMessage.content === "Yes" || message.author.lastMessage.content === "yes"){
            message.channel.send(`Ok, Starting Application For: ${message.author.tag} !`)
            message.channel.send('What Is Your Age?').then(() => {
                message.channel.awaitMessages(response => response.author === message.author, {
                    max : 1,
                    time : 10000,
                }).then(() => {
                }).then(() => {
                    var age = message.author.lastMessage
                    message.channel.send('What Is Your TimeZone?').then(() => {
                        message.channel.awaitMessages(response => response.author === message.author, {
                            max : 1,
                            time : 10000,
                        }).then(() => {
                            var TimeZone = message.author.lastMessage.content
                                message.channel.send('What Programming Languages Do You Specify In?').then(() => {
                                    message.channel.awaitMessages(response => response.author === message.author, {
                                        max : 1,
                                        time : 1000000,
                                    }).then(() => {
                                        var Specify = message.author.lastMessage
                                        message.channel.send('Why Should We Make You A Developer').then(() => {
                                            message.channel.awaitMessages(response => response.author === message.author, {
                                                max : 1,
                                                time : 1000000000,
                                            }).then(() => {
                                                var Why = message.author.lastMessage
                                                var embed = new Discord.RichEmbed()
                                                .setTitle(`${message.author.username}'s Application`)
                                                .setColor("FF4654")
                                                .setThumbnail(message.author.avatarURL)
                                                .setFooter("Staff Application")
                                                .setTimestamp(message.author.lastMessage.createdAt)
                                                .addField('Name:', message.author.username)
                                                .addField('Tag:', message.author.tag)
                                                .addField('User ID:', message.author.id)
                                                .addField('Discriminator:', "#" + message.author.discriminator)
                                                .addField('Account Age:', message.author.createdAt)
                                                .addField('Age:', age)
                                                .addField('TimeZone:', TimeZone)
                                                .addField('Secified Languages:', Specify)
                                                .addField('Why Should We Make You Developer?:', Why)
                                                message.channel.send('Your Application Has Been Submitted to staff:')
                                                message.guild.channels.find("name", "applications").send({embed})
                                            })
                                        })
                                    })
                                })
                        })
                    })
                })
            })
          } else {
              message.channel.send('Ok, Application Cleared.')
        } 
      })
  })
}

exports.help = {
  name: "apply",
  description: "DM Someone",
  usage: "help"
}