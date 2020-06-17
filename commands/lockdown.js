const ms = require('ms');
exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("❌**Error:** Maaf, kamu tidak memiliki izin!");
  if (!time) return message.reply('Durasi?');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('TUTUP');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`Mohon maaf, **${message.author.username}**Telah menutup channel selama: ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send('Baik, terima kasih sudah menunggu kami telah membuka kembali `Text Channel` jaga attitude dan jngn lupa baca `v!rules`')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};
exports.help = {
  name: "lockdown",
  description: "DM Someone",
  usage: "help"
}