module.exports.run = async (client, message, args) => {
    if (args.length < 1)
        return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "What would you like to suggest?")

    let suggestion = args.join(' ');

    client.users.get("312916765078192139").send("Suggestion from " + "**" + message.author.tag + " (" + message.author.id + ")**:" + ` ${suggestion}`);
    message.channel.send("Suggestion from " + "**" + message.author.tag + " (" + message.author.id + ")**:" + ` ${suggestion}`);
    message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sent your suggestion to the bot developers")
}

exports.help = {
  name: "suggest",
  description: "DM Someone",
  usage: "help"
}