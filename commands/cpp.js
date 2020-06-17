const { post } = require('superagent');
const { RichEmbed } = require('discord.js');

async function cppRunner (client, msg, args){
	args = args.join(' ').trim()
	if(!args) return msg.reply('Hai! apa Code yang kamu ingin gunakan di command ini?');
	const { text } = await post('http://coliru.stacked-crooked.com/compile')
	.send({
		cmd: 'g++ main.cpp && ./a.out',
		src: args
	});
	const embed = new RichEmbed()
	.setColor('PURPLE')
	.setDescription(`\`\`\`diff\n${text}\`\`\``);
	return msg.reply(embed);
}

exports.help = {
  name: "cpp",
  description: "DM Someone",
  usage: "help"
}
this.run = cppRunner;