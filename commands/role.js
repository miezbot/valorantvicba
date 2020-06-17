const Discord = require('discord.js');

module.exports.run = async(bot, message, args, db) =>{
    let roles = [];
    message.guild.roles.forEach(role =>{
        if(role.name != "@everyone"){
            roles.push(`<@&${role.id}>`);
        }
    });
    if(roles.length > 0){
        roles.sort();
		roles = `🔹 `+roles.join('\n🔹 ');
    }
    else{
        roles = "(No roles found)";
    }
	let embed = new Discord.RichEmbed()
	.setAuthor(`Daftar Role`)
    .setColor("FF4654")
    .setFooter("Guild ID:" + message.guild.id)
	.setDescription(`Role :\n${roles}`);
	
	message.channel.send(embed);
}

exports.help = {
  name: "role",
  description: "DM Someone",
  usage: "help"
}