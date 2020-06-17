const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.reply("Can't find user!");
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**You don't have `KICK_MEMBERS` permissions.**")
  let kReason = args.join(" ").slice(22);
  if(!kReason) return message.reply("Please provide a reason!")

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("Pengguna Tertendang")
  .setColor("#ff4654")
  .addField("Pengguna", `${kUser}`)
  .addField("Ditindak oleh", `${message.author}`)
  .addField("Alasan", `${kReason ? kReason : "Default Message : `Telah melanggar rules.`"}`)
  .setTimestamp();

  let kickChannel = message.guild.channels.find(`name`, 'server-logs');
  if(!kickChannel) return message.channel.send(":X: **| Tidak ada `server-logs` channel.**");
   let embed = new Discord.RichEmbed()
  .setDescription("Pengguna Tertendang")
  .setColor("#ff4654")
  .addField("Pengguna", kUser.user.tag)
  .addField("Ditindak oleh", message.author.tag)
  .addField("Waktu", message.createdAt.toLocaleString())
  .addField("Alasan", `${kReason ? kReason : "Default Message : `Telah melanggar rules.`"}`);
  var embed1 = new Discord.RichEmbed()
        .setColor("GREEN")
        .setTitle("Member telah ditendang!")
message.channel.send(embed1)
kUser.kick(kReason)
kickChannel.send(kickEmbed);
try{kUser.send(embed)}catch(e) {message.channel.send("Tidak bisa mengirim pesan ke pengguna tersebut!")}

}


exports.help = {
  name: "kick",
  description: "DM Someone",
  usage: "help"
}