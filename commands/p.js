  const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    message.delete()

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("❌**Error:** Maaf, kamu tidak memiliki izin!");
 const GuildMember = message.guild.members;

  const channel = message.guild.channels.get('708710146414477395'); //replace voiceChannelID with your voice Channel ID

let toCheck = channel.members;  
  await message.channel.send({embed: {
                    color: 3447003,
                    title: "Selamat Kamu Terpilih (╯°□°）╯︵ ┻━┻:",
                    description: 'Pengguna : ' + toCheck.random()
                }}).then(msg =>{
  })
}
exports.help = {
  name: "p",
  description: "DM Someone",
  usage: "help"
}