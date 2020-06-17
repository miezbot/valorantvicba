const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
  if (args.includes("@everyone"))
    return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + ' **Error**');

  if (args.includes("@here"))
    return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + ' **Error** ');

  if (!args[0]) {
    return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please supply a time interger and message. (s = second, m = minute, h = hour, d = day)");
  }

  if (args[0] <= 0) {
    return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please supply a time interger and message. (s = second, m = minute, h = hour, d = day)");
  }

  let Timer = args[0];

  message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Timer has been set for: " + `${ms(ms(Timer), { long: true })}`)

  setTimeout(function () {
    message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + `Timer has ended, it lasted: ${ms(ms(Timer), { long: true })}` + " " + message.author.toString() + "\n Message that came with it: " + "`" + args.splice(1).join(' ') + "`")

  }, ms(Timer));
}
exports.help = {
  name: "lontong",
  description: "DM Someone",
  usage: "help"
}