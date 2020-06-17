const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
//The word that will be deleted
let badword = args[0];

let deletedmessages = message.channel.messages.filterArray(msg => {
        const badwords = msg.content.includes(badword) ;

        return  badwords;

    });

    if (!args[0]) return message.channel.send('Ya?');
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Maaf, kamu tidak memiliki izin.");
    if (deletedmessages.length >= 1)
    {
        message.channel.bulkDelete(deletedmessages);
        message.channel.send(`${deletedmessages.length} pesan berhasil dihapus.`)
            .then(msg => {
                msg.delete(5000)
            })

    }
    else
    {
        message.channel.send(`Tidak menemukan kata tersebut`)
    }


}

exports.help = {
  name: "hapuskata",
  description: "DM Someone",
  usage: "help"
}