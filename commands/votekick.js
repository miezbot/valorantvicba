const Discord  = module.require('discord.js');

const agree    = "✅";
const disagree = "❎";

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("❌**Error:** Kamu tidak memiliki izin!");
  if (message.mentions.users.size === 0){
    return message.reply(":x: " + "| Mention terlebih dahulu jika proses ingin berjalan.");
  }

  let kickmember = message.guild.member(message.mentions.users.first());
  if(!kickmember){
    message.reply(":x: " + "| User Tidak Ditemukan!");
  }

  if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
    return message.reply(":x: " + "| Aku butuh izin\"KICK_MEMBERS\" !").catch(console.error);
  }
  var kontol = new Discord.RichEmbed()
  .setTitle("Vote Kick")
  .setColor("FF4654")
  .setDescription(`Bagaiman cara vote-nya? sangat gampang..<:SataniaThumbsUp:704334809056673863> hanya perlu meng-klik **Reaction's** dibawah.\n\n:scroll:\`Alasan :\` Karena Telah Melanggar Peraturan Komunitas Kita\n:man_detective:\`Pelaku :\` ${message.guild.member(message.mentions.users.first())}
 :alarm_clock:\`Waktu :\` 20 Detik\n\n\`v!rules\` jika tidak ingin melanggar peraturan yang ada dikomunitas.\n`)
  let msg = await message.channel.send(kontol);
  await msg.react(agree);
  await msg.react(disagree);

  const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 15000});
  msg.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

  var sumsum = new Discord.RichEmbed()
  
            .addField("`Hasil Voting :`", "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n" +
                                          " <:3634_Uncheck:695844029790814286> (Tidak): " + `${NO_Count-1} Orang\n` +
                                          " <:6793_TickYes:695844016088023050> (Ya): " + `${YES_Count-1} Orang\n` +
                                          "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n" +
                                          "NOTE: (Ya) Min : 3 Orang+\n" +
                                          "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", true)

            .setColor("ff4654")
  var komkom = new Discord.RichEmbed()
    .setColor("36393F")
    .setThumbnail("https://cdn.discordapp.com/attachments/705108157378199593/710955751996129311/checkbox-dribbble-looped-landing.gif")
    .setDescription("```Hasil Voting telah mencukupi terima kasih teman\" telah membersihkan hama.```" +`\n:man_detective:**\`Pelaku :\`** ${message.guild.member(message.mentions.users.first())}`) 

  await message.channel.send({embed: sumsum});

  if(YES_Count >= 4 && YES_Count > NO_Count){

    kickmember.kick().then(member => {
      message.channel.send(komkom)
    })
  }else{
    var gagal = new Discord.RichEmbed()
    .setColor("36393F")
    .setThumbnail("https://cdn.discordapp.com/attachments/705108157378199593/710914335756517478/gagal.gif")
    .setDescription("```Hasil Voting tidak mencukupi untuk melakukan tindakan.```" +`\n:man_detective:**\`Pelaku :\`** ${message.guild.member(message.mentions.users.first())}\n:man_police_officer:**\`Pak Polisi :\`** : Kali ini kamu aman :) TAPI BOONG!`) 
    message.channel.send(gagal);
  }

}

exports.help = {
  name: "votekick",
  description: "DM Someone",
  usage: "help"
}


