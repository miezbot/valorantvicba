const Discord = module.require('discord.js');
var rules1 = new Discord.RichEmbed()
        .setTitle("Server Rules")
.addField("Rules (1/2):","---------------------------------------------------------------------------------------\n"+
"1) Tolong jangan mendiskriminasikan atau melecehkan siapa pun.\n"+
"1.1) Bebas berinteraksi asal sopan dan tahu aturan standard berkomunitas, karena disini kita semua keluarga jadi mohon saling menjaga attitude.\n"+
"1.2) Harap hindari konten NSFW dalam bentuk apa pun: tautan, video, gambar, atau diskusi. Konten yang mungkin menyinggung atau tidak patut tidak boleh diposting atau didiskusikan.\n"+
"1.3) Dilarang menyebarkan Harmful Link & Harmful messages\n"+
"1.4) Nama pengguna yang tidak sopan atau penuh kebencian tidak diizinkan.\n"+
"1.5) Self promote dan share konten hanya di #showoff / #valorant-share\n", true)

        .setColor("ff4654")

var rules2 = new Discord.RichEmbed()
        .setTitle("Sell, Buy, Trade")
.addField("Rules (2/2):"," 1) Dilarang keras memperjualbelikan Program/Software illegal (cheat).\n"+
"1.1) Dilarang memperjualbelikan RIOT Account's\n"+
"1.2) Admin dan Support team tidak bertanggung jawab jika terjadi penipuan / kecurangan dalam transaksi. Jadi selalu hati-hati dalam ber-transaksi.\n"+
"---------------------------------------------------------------------------------------\n", true)

        .setColor("ff4654")

module.exports.run = async (bot, message, args) => {
//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time


            message.channel.send(rules1)
            message.channel.send(rules2)

              .then(function (message) {
                message.react("695844016088023050")
              })
}
exports.help = {
  name: "rules",
  description: "DM Someone",
  usage: "help"
}