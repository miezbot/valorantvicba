const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");
//const mysql = require('mysql');
//const file = require('../mysql.json');

exports.run = async (client, message, args) => {
  let reason = args.slice(1).join(' ');
  message.delete().catch();
  let user = message.mentions.users.first() || client.users.get(args[0]);
  let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
  //let logchannel = message.guild.channels.find('name', 'logs');
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Maaf,kamu tidak memiliki izin.")
  if (message.mentions.users.size < 1) return message.reply('Mention terlebih dahulu.').catch(console.error);
  if (message.mentions.users.first().id === message.author.id) return message.reply('Kamu tidak bisa memperingatkan diri sendiri. :facepalm:');
  if (message.mentions.users.first().id === "312916765078192139" || message.mentions.users.first().id === "658775619659890741" ) return message.reply("Atasan ini bosq.. :wink:");
  //if (!logchannel) return message.channel.send('I cannot find a logs channel');
  if (reason.length < 1) reason = 'Karena melanggar peraturan *Komunitas*.';
  
  if(!warns[`${user.id}, ${message.guild.id}`]) warns[`${user.id}, ${message.guild.id}`] = {
    warns: 0
  };

  warns[`${user.id}, ${message.guild.id}`].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), err => {
    if(err) throw err;
  });

  const embed = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setTimestamp()
  .addField('Aksi:', 'Memberi Peringatan')
  .addField('Pengguna:', `${user.username}#${user.discriminator}`)
  .addField('Diperingatkan oleh:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Memiliki Peringatan:', warns[`${user.id}, ${message.guild.id}`].warns)
  .addField('Alasan', reason)
  let kontol = "KONTOL"
  let logchannel = message.guild.channels.find('name', 'logs');
  if  (!logchannel){
    message.channel.send({embed})
  }else{
    client.channels.get(logchannel.id).send({embed});
    message.channel.send({embed})
  }
  if(user.bot) return;
  message.mentions.users.first().send(embed).catch(e =>{
    if(e) return 
  });


  if(warns[`${user.id}, ${message.guild.id}`].warns == 2){
    let muteRole = message.guild.roles.find('name', 'Mute Valorant')

    let mutetime = "60s";
    message.guild.members.get(user.id).addRole(muteRole.id);
    message.reply(`${user.tag} Telah dibisukan \`selama 1 menit\`!`);

    setTimeout(function(){
      message.guild.members.get(user.id).removeRole(muteRole.id).then(msg =>{
      message.channel.send(`${user.tag} Telah tidak dibisukan!`)})
    }, ms(mutetime)
    )
  }

  if(warns[`${user.id}, ${message.guild.id}`].warns == 3){
    message.guild.member(user).kick(reason);
    message.reply('Kamu telah melanggar hingga 3x : Tendang!')
  }

  if(warns[`${user.id}, ${message.guild.id}`].warns == 5){
    message.guild.member(user).ban(reason);
    message.reply('Kamu telah melanggar hingga 5x : Banned!');
  }

};

exports.help = {
  name: "peringatan",
  description: "DM Someone",
  usage: "help"
}