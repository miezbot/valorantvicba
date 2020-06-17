const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const agree = "✅";
    const disagree = "❎";

    try {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Maaf, kamu tidak memiliki izin.");

        let channel;
        let timeS;
        let votingthing;
        if (message.mentions.channels.size > 0 && args[0].startsWith("<#")) {
            channel = message.guild.channels.get(message.mentions.channels.first().id);
            timeS = args[1];
            votingthing = args.splice(2, args.length);
        } else {
            channel = message.channel;
            timeS = args[0];
            votingthing = args.splice(1, args.length);
        }

        if (timeS == '' && votingthing == '') return message.reply("Tidak ada parameter");
        if (votingthing == '') return message.reply("Tidak ada parameter");

        if (isNaN(timeS)) {
            // timeS = 10000
            votingthing = timeS + ' ' + votingthing.join(' ');
            timeS = 60000;
        } else {
            votingthing = votingthing.join(' ');
            timeS = parseInt(timeS) * 1000;
        }

        if (timeS < 5000 || timeS > 180000) {
            message.reply('Waktu? (Tidak boleh kurang 5 detik dan tidak boleh lebih 30 menit)');
            return;
        }

        const VoteEmbed = new Discord.RichEmbed()
            .setTitle(votingthing)
            .setDescription("Vote Sekarang!")
            .setFooter(`Started by ${message.author.username}`, message.author.displayAvatarURL)
            .setColor("FF4654");

        let msg = await channel.send({
            embed: VoteEmbed
        });
        await msg.react(agree);
        await msg.react(disagree);

        const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {
            time: timeS
        });
        // msg.delete();

        var no = reactions.get(disagree).count;
        var yes = reactions.get(agree);

        if (yes == undefined) {
            var yes = 1;
        } else {
            var yes = reactions.get(agree).count;
        }

        var total = yes > no ? "Terima kasih sudah memilih IYA" : "Terima kasih sudah memilih TIDAK";
        if (yes == no) total = "Seri";

        const embed = new Discord.RichEmbed()
            .setTitle(`${votingthing.replace(/([^\W_]+[^\s-]*) */g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() })}`)
            .setDescription("**----------------------------------------**\n" +
                "Total votes (Ya): " + `${yes - 1}\n` +
                "Total votes (Tidak): " + `${no - 1}\n` +
                "\n" +
                `${total}\n` +
                "**----------------------------------------**", true)
            .setColor("FF4654")
            .setFooter(`Started by ${message.author.username}`, message.author.displayAvatarURL);

        await msg.edit("Voting selesai!", {
            embed
        });
    } catch (err) {
        console.log(err);
    }
};

exports.help = {
  name: "vote",
  description: "DM Someone",
  usage: "help"
}