const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.channel.send("<:6793_TickYes:695844016088023050> Ok, Memulai menghitung orang yang sedang ada dichannel.")

const voiceChannels = message.member.voiceChannel.size;

message.channel.send("Member Voice Count : " + `\`${voiceChannels}\``);

}
exports.help = {
  name: "count",
  description: "DM Someone",
  usage: "help"
}