const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
    let inline = true
    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.size
    let chansize = bot.channels.size
    let uptimxd = bot.uptime 
    let servsize = bot.guilds.size
    let botembed = new Discord.RichEmbed()
    .setColor("#ff4654")
    .setThumbnail(bicon)
    .addField("Nama Bot", `<:4713_ubot:695843787435409458> ${bot.user.username}`, inline)
    .addField("Servers", `🛡 ${servsize}`, inline)
    .addField("Channels", `📁 ${chansize}`, inline)
    .addField("Pengguna", `<:user:718007311859449888> ${usersize}`, inline)
    .addField("Bot Library", "<:djs:718006763647139859> Discord.js", inline)
    .addField("Tanggal Pembuatan", `${moment().utcOffset(8).locale('id').format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
    .addField("Developed by: ",`<:dev:718006067350601738> Developed by: Hikaru Studio`)
    .setTimestamp()
    
    message.channel.send(botembed);

}

exports.help = {
  name: "bot",
  description: "DM Someone",
  usage: "help"
}