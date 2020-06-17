const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");
exports.run = (client, message, args) => {
        message.delete().catch();
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Maaf, kamu tidak memiliki izin.")
    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
    let user = message.mentions.users.first() || client.users.get(args[0]);
    if(message.mentions.users.size < 1) return message.reply('Mention terlebih dahulu.').catch(console.error);
    if(!user) return message.reply("Tidak dapat menemukan pengguna...");
    let reason = `${warns[`${user.id}, ${message.guild.id}`].warns} Yolo`;
    if(!warns[user.id]) warns[user.id] = {
      warns: 0
    };
  else{
    message.channel.send("kontol")
  }


    const embed = new Discord.RichEmbed()
    .setColor(0xFFFF01)
    .setTimestamp()
    .addField('Aksi:', 'Mengecek Peringatan')
    .addField('Pengguna:', `<@!${user.id}>`)
    .addField('Memiliki Peringatan :', warns[`${user.id}, ${message.guild.id}`].warns)
    message.channel.send({embed});
}
exports.help = {
  name: "daftarperingatan",
  description: "DM Someone",
  usage: "help"
}