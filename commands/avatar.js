const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
  message.delete().catch(O_o => {});
  let bicon = bot.user.displayAvatarURL;
  let member =
    message.mentions.users.first() || bot.users.get(args[0]) || bot.users.find(user => user.username == (args[0])) || message.author;
  let avatar = member.displayAvatarURL;
  if (avatar.endsWith(".gif")) {
    avatar = `${member.displayAvatarURL}?size=2048`;
  }

  let botembed = new Discord.RichEmbed()
    .setAuthor(`${member.tag} Avatar`)
    .setDescription(`Klik __[\`Disini\`](${avatar})__ untuk download`)
    .setImage(avatar)
    .setFooter("Dicek oleh "+message.author.tag ,message.author.displayAvatarURL)
    .setColor("#ff4654");
  message.channel.send(botembed);
};


exports.help = {
  name: "avatar",
  description: "DM Someone",
  usage: "help"
}