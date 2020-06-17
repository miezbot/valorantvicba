const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(args[0] == "help"){
    var error1 = new Discord.RichEmbed()
    .setColor("#ff4654")
    .setTitle("Usage Command")
    .setFooter('Command for List Commands. | delete in 10sec')
    .setDescription("`usage : v!about info|general|support|promote|market|chill|lf|casual|rank|scrimmageinfo|scrimmage|scrimmageteam`\n**Example : v!about info**")
    message.channel.send(error1).then(msg => {msg.delete(10000)});
    message.delete(10000)
    return
    
  } 
if(args[0] == "info"){
    var error1 = new Discord.RichEmbed()
    .setColor("#ff4654")
    .setTitle("Category Channel Info")
    .setDescription("<#684887316908605508> **:** _Tempat dimana kalian sedang membaca tentang semua server ini mulai dari rules & information_.\n<#685513138682069032> **:**  _semua pemberitahuan diserver semua ada dichannel tersebut_.\n<#684863251774832650> **:**  _Disini kalian bisa mendapat informasi/update tentang game_.\n<#718057856238092308> **:**   _<:gg:704332247741759598>  Competitive Information_.\n<#697231528375222292> **:**  _Official server partner in here _<:6793_TickYes:695844016088023050>.\n<#703175959637000253> **:** _Disini kalian bisa mendapatkan notice orang-orang dermawan berdonasi pada server_ <:booster:718486685431758848> .\n<#708712518666813512> **:** _Beri saran atau feedback buat komunitas ini ya dengan menggunakan perintah `v!feedback <pesan>`_ :mailbox:.")

    message.channel.send(error1).then(msg => {msg.delete(10000)});
    message.delete(10000)
    return         
}  else if (args[0] == "general") {
 var error1 = new Discord.RichEmbed()
    .setColor("#ff4654")
    .setTitle("Category Channel General")
    .setDescription("<#718378756053663826> **:**  _Tempat dimana kalian berbincang-bincang dengan teman\" komunitas lainnya & <#717447038962499674> membicarakan topik diluar game_.\n<#716062460552937522> **:**  _Kirim file berbentuk doc/link/video/foto disini_.")
    
    message.channel.send(error1).then(msg => {msg.delete(10000)});
    message.delete(10000)
    return 
}
if(args[0] == "support"){
    var error1 = new Discord.RichEmbed()
    .setColor("#ff4654")
    .setTitle("Category Channel Support")
    .setDescription("<#700798187916623922> **:** _Ingin lebih mudah mencari teman mabar? silahkan baca_ `Pin Message`.\n<#717452289937244280> **:**  _Beri tau masalah kalian dichannel tersebut dan mari kita pecahkan masalah tersebut bersama <:brimstonelike:717798219433640037> _.")

    message.channel.send(error1).then(msg => {msg.delete(10000)});
    message.delete(10000)
    return
    
}
  if(args[0] == "pack"){
    var error1 = new Discord.RichEmbed()
    .setColor("#ff4654")
    .setTitle("Hikaru Studio Resource Pack")
    .setFooter('Command for see Resource Pack | delete in 10sec.')
    .setDescription(`Hello <@!${message.author.id}>! Now Hikaru have a official resourcepacks!\n**Check the link below:**
 [ResourcePack](https://drive.google.com/open?id=1mO2F_w4r47qYXfybNaZh_3UtSUaPk9Rw)`)
    .setColor('c32bb7')

    message.channel.send(error1);
    message.delete()
    return
    
}
  var mobile = new Discord.RichEmbed()
  .setAuthor(`Valorant Indonesia Community`, message.guild.iconURL)
  .setThumbnail(`${message.author.avatarURL}`)
   .setColor("#ff4654")
    .setFooter('Command for List Commands. | delete in 10sec')
    .setDescription("`usage : v!about`\n\n **info** | **general** | **support** | **~~promote~~** | **~~market~~** | **~~chill~~** | **~~lf~~** | **~~casual~~** | **~~rank~~** | **~~scrimmageinfo~~** | **~~scrimmage~~** | **~~scrimmageteam~~**\n\n*Example : v!about info*")
message.channel.send(mobile).then(msg => {msg.delete(10000)});
    message.delete(10000)
}

exports.help = {
  name: "about",
  description: "DM Someone",
  usage: "help"
}