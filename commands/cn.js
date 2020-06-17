const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (client, message, args) => {
      if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("❌**Error:** Maaf, anda siapa ya!!!??");
  var channelerror= new Discord.RichEmbed()
  .setAuthor(message.author.tag,message.author.avatarURL)
  .setDescription("Tolong ikuti peraturan. Silahkan ke `Text Channel` <#700798187916623922> untuk mengganti nickname member.")
  .setColor("FF4654")
  message.delete()
  if(message.channel.id !== '700798187916623922')
  return message.channel.send(channelerror)
  message.delete();
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  let nickname = args.join(" ").slice(22);
  if(!user) return message.channel.send("Tolong mention terlebih dahulu!")
  user.setNickname(nickname);
  
  const embed = new Discord.RichEmbed()
  .setTitle("Nickname berhasil diganti.")
  .setColor("GREEN")
  .setDescription(`Berhasil mengubah nickname menjadi ${user}.`)
  .setFooter(`Tanggal : ${moment().utcOffset(8).locale('id').format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`);
  
  message.channel.send(embed).then(m => m.delete(10000));
}

exports.help = {
  name: "cn",
  description: "DM Someone",
  usage: "help"
}