const snekfetch = require("snekfetch");
const Discord = require('discord.js')


exports.run = (client, message, args, level) => {
  message.delete()
  if (!args[0]) return message.channel.send(":x: Hai apa yang ingin kamu lakukan di Hastebin?");
  
      snekfetch.post(`https://hastebin.com/documents`)
      .send(args.slice(0).join(" "))
      .then(response => {
        var text = new Discord.RichEmbed()
  .setTitle(":inbox_tray: Upload Complete")
  .setColor("FF4654")
  .setDescription(`Klik __[Disini](https://hastebin.com/${response.body.key})__ link telah dibuat :white_check_mark:`)
      message.channel.send(text);
  });
};
exports.help = {
  name: "hastebin",
  description: "DM Someone",
  usage: "help"
}