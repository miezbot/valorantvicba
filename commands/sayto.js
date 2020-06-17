exports.run = async (client, message, args, level) => {
          if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Maaf, kamu tidak memiliki izin.");
  try {
    if (!args[0]) return message.reply('Mention Channel terlebih dahulu!');
    if (!args[1]) return message.reply('Pesannya!');
    
    message.delete();
    const str = args.slice(1).join(' ');
    if (!message.mentions.channels.first) return message.reply('Aku tidak bisa menemukan channel tersebut!');
   message.mentions.channels.first().send(str);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.help = {
  name: "sayto",
  description: "DM Someone",
  usage: "help"
}