const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS"));
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}

exports.help = {
  name: "say",
  description: "DM Someone",
  usage: "help"
}