const { RichEmbed } = require('discord.js')
let a = require("math-expression-evaluator");
module.exports.run = (client, msg, args, config) => {

    if (args.join(" ").length > 2000) return msg.reply('Argument terlalu panjang, tidak boleh lebih dari 2000 karakter')
    try { 
        let embed = new RichEmbed()
        .setColor("ff4654")
        .setDescription(`Kalkulasi dari ${args.join(" ")}\n\n** Adalah: ` + a.lex(args.join(" ")).toPostfix().postfixEval() + '**')
        msg.channel.send(embed)
    } catch (err) {
       msg.channel.send(err.message)
    }

  
}

exports.help = {
  name: "kalkulator",
  description: "DM Someone",
  usage: "help"
}