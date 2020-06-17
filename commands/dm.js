const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {    // get client from message's channel
  message.delete()
let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if (!dUser) return message.channel.send("Tidak menemukan pengguna.")
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("❌**Error:** Kamu tidak memiliki izin!");
let dMessage = args.join(" ").slice(22);
if(dMessage.length < 1) return message.reply('Pesan Kosong.')
let kontol = new Discord.RichEmbed()
      .setColor("c32bb7")
      .setTitle(`Pesan Dari ${message.author.username}`)
      .setDescription(`${dUser} Mengirim Dari **${message.guild.name}**`)
      .addField(`**Pesan** :  ${dMessage}`,"\u200B")
      .setFooter("h!dm (user) untuk membalas")
dUser.send(kontol)
message.channel.send(`${message.author} Pesan telah terkirim ke ${dUser}`).then(msg => {
})
}
exports.help = {
  name: "dm",
  description: "DM Someone",
  usage: "help"
}