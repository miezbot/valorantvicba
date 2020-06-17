const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
    message.delete()
  if (message.content.startsWith('v!feedback')) {
    let rest_of_the_string = message.content.slice('v!feedback'.length); //removes the first part
    let array_of_arguments = rest_of_the_string.split('|'); //[title, description, link, image]
    if (!message.guild.member(client.user).hasPermission('ADD_REACTIONS')) return message.reply('Maaf, aku tidak mempunya izin `ADD_REACTIONS.` :x:')
      const sayMessage = args.join(" ");
      if (sayMessage.length < 1) return message.channel.send(`Hai <@!${message.author.id}> tolong isi saran/feedback & judul nya! \`v!feedback <Judul|Deskripsi>\``)
    const embed = new Discord.RichEmbed()
     .setColor("FF4654")
    .setThumbnail(message.author.avatarURL)
    .setTitle(array_of_arguments[0])
     .setDescription(`Pesan Feedback :\n ${array_of_arguments[1]}!\n\nBerikan \`Reaksi\` kalian terhadap feedback ini!,antusias kalian bisa memberi kami lebih ingin mengembangkan komunitas.`)
     .setFooter("Saran Oleh " + message.author.username, message.author.avatarURL)
     .setTimestamp()
      message.channel.send({embed}).then(m => {
         m.react('📥');
         m.react('📤');
        })
    }
}

exports.help = {
  name: "feedback",
  description: "DM Someone",
  usage: "help"
}