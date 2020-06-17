const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //+mute @user 1s/m/h/d
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.reply("Maaf, kamu tidak memiliki izin.");
  if(!tomute) return message.channel.send("v!tempbisu @Pengguna Waktu(1s) Alasan")

  let muterole = message.guild.roles.find(`name`, "Mute Valorant");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Mute Valorant",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  let reason = args.slice(2).join(" ");
  if(!mutetime) return message.channel.send("`Usage :` v!tempbisu @Pengguna Waktu(1s) Alasan");
  if(!reason) return message.channel.send("`Usage :` v!tempbisu @Pengguna Waktu(1s) Alasan");
  if(tomute.roles.has(muterole.id)) return message.channel.send("Pengguna tersebut telah dibisukan.");
  await(tomute.addRole(muterole.id));
  let mutedEmbed = new Discord.RichEmbed()
.setDescription("» Dibisukan «")
.setColor("#ff4654")
.addField("Pelaku", `${tomute} with ID ${tomute.id}`)
.addField("Ditindak oleh", `<@${message.member.id}> with ID ${message.member.id}`)
.addField("TKP", message.channel)
.addField("Alasan", `${reason}`)
.addField("Waktu", `${ms(ms(mutetime))}`)
let incidentchannel = message.guild.channels.find(`name`, "server-logs");
if(!incidentchannel) return message.channel.send("Test");
    message.delete().catch(O_o=>{});
tomute.send(mutedEmbed);
 message.channel.send(`**Done, ${tomute} has been muted !**`)

  setTimeout(function(){
      if(tomute.roles.has(muterole.id)){
    tomute.removeRole(muterole.id);
    let unMutedEmbed = new Discord.RichEmbed()
  .setDescription("» Sudah tidak dibisukan «")
  .setColor("#ff4654")
  .addField("Pelaku", `${tomute} with ID ${tomute.id}`)
  .addField("Ditindak oleh", `<@${message.member.id}> with ID ${message.member.id}`)
  .addField("TKP", message.channel)
    incidentchannel.send(unMutedEmbed);
  }54
  }, ms(mutetime));


//end of module
}

exports.help = {
  name: "tempbisu",
  description: "DM Someone",
  usage: "help"
}