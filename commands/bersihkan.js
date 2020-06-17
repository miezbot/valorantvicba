const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");

exports.run = (client, message, args) => {
        message.delete().catch();
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**You don't have `KICK_MEMBERS` permissions.**")
    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
    let user = message.mentions.users.first() || client.users.get(args[0]);
    if(message.mentions.users.size < 1) return message.reply('Mention terlebih dahulu.').catch(console.error);
    if(!user) return message.reply("Tidak dapat menemukan pengguna...");
    if(!warns[`${user.id}, ${message.guild.id}`]){
    warns[`${user.id}, ${message.guild.id}`] = {
        warns: 0
    };
}
    let reason = `${warns[`${user.id}, ${message.guild.id}`].warns} semua peringatan pada pengguna ini telah dibersihkan.`;
    if(warns[`${user.id}, ${message.guild.id}`].warns > 0) {
        warns[`${user.id}, ${message.guild.id}`] = {
        warns: 0
    };
    }else{
        reason = 'Pengguna ini tidak memiliki peringatan :wink:'
    };

    fs.writeFile("./warnings.json", JSON.stringify(warns), err => {
        if(err) throw err;
      });

    const embed = new Discord.RichEmbed()
    .setColor("#ff4654")
    .setTimestamp()
    .addField('Aksi:', 'Membersihkan Peringatan', true)
    .addField('Pengguna:', `${user.username}#${user.discriminator}`, true)
    .addField('Hasil:',reason, true)
    message.channel.send({embed});
}

exports.help = {
  name: "bersihkan",
  description: "DM Someone",
  usage: "help"
}