const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");

exports.run = (client, message, args) => {
  
  var error = new Discord.RichEmbed()
  .setAuthor(message.author.tag,message.author.avatarURL)    
  .setDescription("Tolong, masukkan data dengan benar!.")
  .setColor("FF4654")
  var channelerror= new Discord.RichEmbed()
  .setAuthor(message.author.tag,message.author.avatarURL)
  .setDescription("Tolong ikuti peraturan. Silahkan ke `Text Channel` <#700798187916623922> untuk mengganti nickname kamu.")
  .setColor("FF4654")
  message.delete()
  if(message.channel.id !== '700798187916623922')
    return message.channel.send(channelerror)
         let nick = args.join(" ").slice(0)
         var embed = new Discord.RichEmbed()
    .setTitle("Change Nickname")
    .setDescription(`Display Nickname : ${nick}
                     Display Username : ${message.author.username}
                     Mohon Tunggu Sebentar...`)
    .setThumbnail("https://cdn.discordapp.com/attachments/705543564020678756/710632022829170778/kad.gif")
    var embed1 = new Discord.RichEmbed()
    .setTitle("Change Nickname")
    .setDescription(`Display Nickname : ${nick}
                     Display Username : ${message.author.username}
                     Mohon Tunggu Sebentar..`)
    .setThumbnail("https://cdn.discordapp.com/attachments/705543564020678756/710632022829170778/kad.gif")
    var ganti = new Discord.RichEmbed()
    .setTitle("Done!")
    .setDescription(`Display Nickname : ${nick}
                     Display Username : ${message.author.username}
                     Terima kasih sudah menunggu \`Nickname\` kamu sudah diganti.`)
    .setThumbnail("https://cdn.discordapp.com/attachments/705543564020678756/710632022829170778/kad.gif")
    .setColor("3fe84d")
         message.channel.send("Hai").then(msg => {
    
    setTimeout(function(){ 
    msg.edit(embed).then(msg1 =>{
      setTimeout(function(){
        msg1.edit(embed1).then(change =>{
          setTimeout(function(){
             change.edit(ganti).then(nama =>{
               setTimeout(function(){
                   nama.send(ganti)
                   nama.delete(3000)
               },2000)
             })
          },3000)
        })
      }, 3000)
    })
}, 3000);   
  })
  message.member.setNickname(nick)  
  if(!nick) return message.channel.send(error)
};

exports.help = {
  name: "nick",
  description: "DM Someone",
  usage: "help"
}