const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  try {
    require('request')({url: 'http://www.splashbase.co/api/v1/images/random?images_only=true', json: true}, (req, res, json) => {
      let embed = new Discord.RichEmbed()
      .setTitle('Random Picture')
      .setColor('#363942')
      .setImage(json.url);
      
      message.channel.send(embed);
    });
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.help = {
  name: "randompict",
  description: "DM Someone",
  usage: "help"
}