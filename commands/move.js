const Discord = require("discord.js")

module.exports.run = async(bot, message, args) => {

    if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("TOT! g ada izin")
    let mUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!mUser) return message.channel.send("Mention Orangnya!")
   let move =  bot.channels.get(args[1]) || bot.channels.find(channel => channel.name === args[1])
   if(!move) return message.channel.send("Ketik nama channel / ID channel")
    mUser.setVoiceChannel(move)

    message.channel.send(mUser + " Berhasil dipindahkan ke " + `**${args[1]}**`)
}

exports.help = {
  name: "move",
  description: "DM Someone",
  usage: "help"
}