const Discord = require("discord.js");
const moment = require('moment');

module.exports.run =async (bot, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "<a:hidup:721762565465702400> Online",
        idle: "<a:apaan:721762428089663498> Idle",
        dnd: "<a:tidak_bisa_diganggu:721762475045027841> Do Not Disturb",
        offline: "<a:mati:721762672370122875> Offline/Invisible"
      }
        
const member = message.mentions.members.first() || bot.users.find(user => user.username == (args[0]))|| message.member;
let target = message.mentions.users.first()|| message.author

if (member.user.bot === true) {
    bot = "<:bot:721763968846266470> Ya";
  } else {
    bot = ":mens: Bukan";
  }

            let embed = new Discord.RichEmbed()
                //.setAuthor(member.user.username)
                .setThumbnail((target.displayAvatarURL))
                .setColor("#ff4654")
                .addField("<:vic:720258409307308128>`Username`", `${member.user.tag}`, inline)
                .addField("<:vic:720258409307308128>`ID`", `${member.user.id}`, inline)
                .addField("<:vic:720258409307308128>`Nickname`", `${member.nickname !== null ? `<:6793_TickYes695844016088023050:695844016088023050> Nickname: ${member.nickname}` : "<:tidak_ada:721765527931846697> Tidak Ada"}`, true)
                .addField("<:vic:720258409307308128>`Bot?`", `${bot}`,inline, true)
                .addField("<:vic:720258409307308128>`Status`", `${status[member.user.presence.status]}`, inline, true)
                .addField("<:vic:720258409307308128>`Playing`", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "<:tidak_ada:721765527931846697> Tidak Bermain"}`,inline, true)
                .addField("<:vic:720258409307308128>`Roles`", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(" ") || "<:tidak_ada:721765527931846697> Tidak Ada Roles"}`, true)
                .addField("<:vic:720258409307308128>`Tanggal Bergabung Server`", moment(member.joinedAt).utcOffset(8).locale('id').format("dddd, MMMM Do YYYY, h:mm A"), true)
                .addField("<:vic:720258409307308128>`Tanggal Bergabung Discord`", moment(member.user.createdAt).utcOffset(8).locale('id').format("dddd, MMMM Do YYYY, h:mm A"), true)
                .setFooter(`Informasi Tentang ${member.user.username}`,member.user.displayAvatarURL)
                .setTimestamp()
    //`${moment().utcOffset(8).locale('id').format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`
            message.channel.send(embed);

            message.delete();
    }



exports.help = {
  name: "info",
  description: "DM Someone",
  usage: "help"
}