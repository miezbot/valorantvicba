const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.delete()
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("❌**Error:** Kamu tidak memiliki izin!");
  if(!args[0]) return message.channel.send("Tolong, sebutkan jumlah pesan yang akan dibersihkan!");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });

  let banEmbed = new Discord.RichEmbed()
      .setDescription("Pesan Dibersihkan")
      .setColor("#ff4654")
      .addField("Jumlah pesan terhapus", args[0])
      .addField("Dibersihkan oleh", `<@${message.author.id}> ID: ${message.author.id}`)
      .addField("Dibersihkan ditempat", message.channel)
      .addField("Tanggal Pembersihan Pesan", message.createdAt)

  let clearChannel = message.guild.channels.find(`name`, "server-logs")
  if (!clearChannel) return message.channel.send("Tidak menemukan channel bernama : #bot-logs")
    
}

exports.help = {
  name: "clear",
  description: "DM Someone",
  usage: "help"
}    //if (!msg.member.hasPermission("MANAGE_MESSAGE")) return msg.reply("❌**Error:** Kamu tidak memiliki izin!");
