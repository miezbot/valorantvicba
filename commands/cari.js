const Discord = require('discord.js');
const moment = require('moment')

module.exports.run = async (bot, message, args) => {
    message.delete()
    if (!message.member.roles.some(r=>["ADMIN","SUPPORT TEAM"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!");

    let users = bot.users;

    let searchTerm = args[0];
    if(!searchTerm) return message.channel.send("Masukkan Kata!");

    let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));

    if (!matches.size) return message.reply("Tidak menemukan pengguna yang kamu maksud. :confused:");

    const embed = new Discord.RichEmbed()
        .setDescription(matches.map(u => u.tag + ` **ID : ${u.id}**`))
        .setFooter(`Pengguna ditemukan • ` + moment().calendar(), message.guild.iconURL)
        .setColor('#ff4654');

    message.channel.send(embed);
}

exports.help = {
  name: "cari",
  description: "DM Someone",
  usage: "help"
}