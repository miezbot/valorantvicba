const Discord = require("discord.js");
const moment = require("moment");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
  
message.delete();

if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("Kamu tidak memiliki izin MUTE_MEMBERS");

if(args[0] == null) {
  
const NoArgs = new Discord.RichEmbed()
  .setDescription(`**ERROR**\n\n**►** Error: Argument tidak cocok\n**►** Argument: v!lockdown <permanen|waktu|buka> [waktu **jika memakai** durasi]\n\n***Gunakan perintah ini pada channel yang ingin dikunci***`)
  .setColor("ff4654")
  .setFooter(`Tanggal : ${moment().utcOffset(8).locale('id').format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`);

message.channel.send(NoArgs).then(m => m.delete(5000))

}else if(args[0] == "waktu") {
  
let time = args[1]

message.channel.overwritePermissions(message.guild.defaultRole.id, {
SEND_MESSAGES: false
}, "Cause I'm unlocking the channel.");

const Locked = new Discord.RichEmbed()
  .setTitle(`<:tutup:722068361965731870> **Menutup Chat** <:tutup:722068361965731870>`)
  .addField(":information_source: Informasi", `**Channel** ${message.channel}\n**Durasi** ${time}\n**Moderator** <@!${message.author.id}>`)
  .setColor("ff4654")
  .setFooter(`Tanggal : ${moment().utcOffset(8).locale('id').format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`);
  
  message.channel.send(Locked).then(m => m.delete(5000));
  
const Unlock = new Discord.RichEmbed()
  .setTitle(`<:terbuka:722068303622701066> **Membuka Channel** <:terbuka:722068303622701066>`)
  .addField(":information_source: Informasi", `**Channel** ${message.channel}\n**Durasi** ${time}\n**Moderator** <@!${message.author.id}>`)
  .setColor("GREEN")
  .setFooter(`Tanggal : ${moment().utcOffset(8).locale('id').format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`);
  
setTimeout(function(){
message.channel.overwritePermissions(message.guild.defaultRole.id, {
SEND_MESSAGES: true
}, "Cause I'm unlocking the channel.");
message.channel.send(Unlock).then(m => m.delete(5000));
}, ms(time));

}else if(args[0] == "buka") {
  
message.channel.overwritePermissions(message.guild.defaultRole.id, {
SEND_MESSAGES: true
}, "Cause I'm unlocking the channel.");
  
const UnlockChannel = new Discord.RichEmbed()
  .setTitle(`<a:selesai:722074516691353602> Berhasil membuka channel `)
  .addField(":information_source: Informasi", `**Channel** ${message.channel}\n**Moderator** <@!${message.author.id}>`)
  .setColor("GREEN")
  .setFooter(`Tanggal : ${moment().utcOffset(8).locale('id').format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`);

message.channel.send(UnlockChannel).then(m => m.delete(5000))
  
} else if(args[0] == "permanen") {
  
message.channel.overwritePermissions(message.guild.defaultRole.id, {
SEND_MESSAGES: false
}, "Cause I'm unlocking the channel.");
  
const Locked = new Discord.RichEmbed()
  .setTitle(`:infinity: **Terkunci Permanen** :infinity:`)
  .addField(":information_source: Informasi", `**Channel** ${message.channel}\n**Moderator** <@!${message.author.id}>`)
  .setColor("RED")
  .setFooter(`Tanggal : ${moment().utcOffset(8).locale('id').format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`);
  
  message.channel.send(Locked).then(m => m.delete(5000));
  
}
  
}
exports.help = {
  name: "hello",
  description: "DM Someone",
  usage: "help"
}