const { Attachment,Discord } = require('discord.js');

exports.run = async (client, message, args, level) => {
  try {
    let id = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/.exec(args[1]);
    if (!id) return message.reply('`Usage : v!emojiimage <animasi|biasa> <emoji>`\nTidak ada emoji yang dimasukkan / Emoji tersebut asli dari Discord');
    switch (args[0]) {
      case 'animasi':
        message.channel.send(new Attachment('https://cdn.discordapp.com/emojis/' + id + '.gif' ));
        break;
      case 'biasa':
        message.channel.send(new Attachment('https://cdn.discordapp.com/emojis/' + id + '.png'))
        break;
      default:
        message.reply('Aku butuh `Emoji` tersebut!');
        break;
    }
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.help = {
  name: "emojiimage",
  description: "DM Someone",
  usage: "help"
}