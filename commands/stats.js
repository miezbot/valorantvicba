const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg, args) => {
    const duration = moment.duration(client.uptime).format(" D [hari], H [jam], m [menit], s [detik]");
    msg.channel.send(`= TOTAL STATISTICS =
• Pemakaian Memori  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Uptime     :: ${duration}
• Pengguna   :: ${client.users.size.toLocaleString()}
• Servers    :: ${client.guilds.size.toLocaleString()}
• Channels   :: ${client.channels.size.toLocaleString()}
• Discord.py :: 1.3.3
• Versi Node :: ${process.version}`, {code: "asciidoc"});
};

exports.help = {
  name: "stats",
  description: "DM Someone",
  usage: "help"
}