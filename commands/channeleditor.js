const fs = require(`fs`);
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    let action = args[0];
    let type = args[1].toLowerCase();
    let name = args.slice(2).join(" ");
    if (action == "buat") {
        if (!args[0] || !args[1] || !args[2]) return message.channel.send("**ERROR**: \`v!channel <buat/hapus> <text/voice> <nama>\`");
        if (type == "voice") {
            message.guild.createChannel(name, type).then(channelc => {
            message.channel.send(`:ok_hand: channel dibuat! **Nama:** \`${channelc.name}\` **Tipe:** \`${type}\``)
            })
        }else if (type == "text") {
            try {
                message.guild.createChannel(name, type).then(channelc => {
                    message.channel.send(`:ok_hand: channel dibuat! **Nama:** \`${channelc.name}\` **Tipe:** \`${type}\``)
                })
            } catch (err) {
              message.channel.send("**ERROR** pastikan kamu menggunakan `-` diantara kata.")
            }

        }
    } else if (action == "hapus") {
        if (!args[0] || !args[1]) return message.channel.send("**ERROR**: \`v!channel <buat/hapus> <nama>\`");
        let channelD = message.guild.channels.get(args[1]) || message.guild.channels.find("name", args.slice(1).join(" ")) || args[1]
        channelD.delete()
        message.channel.send(`:ok_hand: ${channelD} named channel deleted!`)
    } else if (action == "edit") {
        if (!args[0] || !args[1]) return message.channel.send("**ERROR**: \`v!channel <edit> <nama baru>\`");
        let name = message.channel.name;
        await message.channel.setName(args.slice(1).join(" "));
        message.channel.send("Berhasil! nama channel lama `" + name + "` nama channel baru `" + message.channel.name + "`")
    }
    

}

exports.help = {
  name: "channeleditor",
  description: "DM Someone",
  usage: "help"
}