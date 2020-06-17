const Discord = require("discord.js");

exports.run = (client, message, args) => {
 module.exports.run = async (bot, message, args) => {
	let ubUser = args[0];
	if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x:" + " Maaf, kamu tidak memilik izin").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
	if(!ubUser) return message.channel.send(":x:" + " ***Tidak menemukan pengguna***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
	let ubanChannel = message.guild.channels.find(`name`, "server-logs");
	if(!ubanChannel) return message.channel.send(":x:" + " ***I can't find this channel***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
	
		
	let unbanEmbed = new Discord.RichEmbed()
		.setDescription("Unban System")
		.setColor("FF4654")
		.addField("Unbanned Pengguna", `${ubUser}`)
		.addField("Unbanned oleh", `<@${message.author.id}> with ID: ${message.author.id}`)
		.addField("Unbanned di", message.channel)
		.addField("Tanggal", message.createdAt)
		
	message.guild.unban(ubUser); 
	message.channel.send(":white_check_mark: ***" + `${ubUser}` + "*** ***telah di unbanned***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
	ubanChannel.send(unbanEmbed);
}
}
exports.help = {
  name: "unban",
  description: "DM Someone",
  usage: "help"
}