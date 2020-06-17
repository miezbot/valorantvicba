const { RichEmbed } = require('discord.js')
const iplookup = require('ipapi.co')
module.exports.run = async (client, msg, args, config) => {


    if(!args[0]) return msg.channel.send('you forgot an IP!')

 
    iplookup.location(function(data) { 
        if(data.error || data.reserved) return msg.reply('Could not find info about that ip address.')
       
      let embed = new RichEmbed()
      .setTitle(data.ip)
      .addField(`Kota`, data.city,true)
      .addField(`Daerah`, data.region,true)
      .addField(`Kode Daerah`, data.region_code,true)
      .addField('Negara', data.country_name,true)
      .addField(`Capital`, data.country_capital,true)
      .addField(`Eropa?`, data.in_eu === true ? "yes" : "no",true)
      .addField(`Kode Pos`, data.postal,true)
      .addField(`Latitude`, data.latitude,true)
      .addField(`Longitude`, data.longitude,true)
      .addField(`Organisasi`, data.org,true)
      
      msg.channel.send(embed)
    }, args[0])

    
  
}

exports.help = {
  name: "ip",
  description: "DM Someone",
  usage: "help"
}