module.exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Generating avatar...");
  let target = message.mentions.users.first() || bot.users.get(args[0]) || bot.users.find(user => user.username == (args[0]))  || message.author;

  await message.channel.send({files: [
    {
      attachment: target.displayAvatarURL,
      name: "avatar.png"
    }
  ]});
  

  message.delete(1000)
  msg.delete();
}

exports.help = {
  name: "avatars",
  description: "DM Someone",
  usage: "help"
}