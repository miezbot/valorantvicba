exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let emoji = message.attachments.array()[0] || args[0];
    
    if (emoji) {
      if (emoji.url) {
        if (args[0]) {
          message.guild.createEmoji(emoji.url, args[0])
          .then(emoji => message.channel.send('Aku telah membuat' + emoji.name + ' emoji!'))
          .catch(err => message.reply('Aku tidak bisa membuat emoji tersebut\n' + err));
        } else message.reply('Beri nama pada emoji tersebut');
      } else {
        if (args[1]) {
          message.guild.createEmoji(emoji, args[1])
          .then(emoji => message.channel.send('Aku telah membuat' + emoji.name + ' emoji!'))
          .catch(err => message.reply('Aku tidak bisa membuat emoji tersebut\n' + err));
        } else message.reply('Beri nama pada emoji tersebut');
      }
      
    } else message.reply('Kirim file gambar terlebih dahulu berbentuk `PNG`');
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.help = {
  name: "createemoji",
  description: "DM Someone",
  usage: "help"
}