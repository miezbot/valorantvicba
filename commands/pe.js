const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => { 
  message.delete()
  if (message.content.startsWith('v!pe')) {
  let rest_of_the_string = message.content.slice('v!pe'.length); //removes the first part
  let array_of_arguments = rest_of_the_string.split(',');
  if (!message.guild.member(bot.user).hasPermission('ADD_REACTIONS')) return message.reply('Maaf, aku tidak mempunya izin `ADD_REACTIONS.` :x:')
  const say = args.join(" ");
    if (say.length < 1) return message.channel.send(`Hai <@!${message.author.id}> tolong isi text & url-nya! \`v!sayimage <text,www.url.com>\``)
message.channel.send(`${array_of_arguments[0]}`,{
   files: [{
      attachment: `${array_of_arguments[1]}`,
      name: "SPOILER_FILE.jpg"
   }]
});
}
}
exports.help = {
  name: "pe",
  description: "DM Someone",
  usage: "help"
}