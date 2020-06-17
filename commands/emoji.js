const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
  
 const WxArtzEmbedBiarSyantik = require('discord.js').RichEmbed;
  let number = message.guild.emojis.array().map((x,i)=> `${i+1} - ${x} (${x.id}) (${x.name})`)
 number = chunk(number, 10);
 
  if (!number) return message.channel.send("Maaf, Server ini tidak memiliki `Emoji`.")
  
  let index = 0;
  const ge = new WxArtzEmbedBiarSyantik()
  .setColor("#ff4654")
  .setAuthor(`| ${message.guild.name} Emoji Collection`, message.guild.iconURL)
  .addField(`${message.guild.owner.user.tag}`, `(${message.guild.ownerID})`)
  .setDescription(number[index].join('\n'))
  .setFooter(`Page ${index+1} of ${number.length}`)
  const m = await message.channel.send(ge);
  await m.react('⬅');
  await m.react('🔴');
  await m.react('➡');
  async function awaitReaction(){
    const filter =(rect, usr) => ['⬅', '🔴','➡' ].includes(rect.emoji.name) && usr.id === message.author.id
    const response = await m.awaitReactions(filter, {
      
      max: 1,
      time: 30000
    });
    if(!response.size){
      return undefined;
    }
    const emoji = response.first().emoji.name;
    if(emoji === '⬅') index--;
    if(emoji === '🔴')  m.delete();
    if(emoji === '➡') index++;
    index = ((index % number.length) + number.length) % number.length;
    ge.setDescription(number[index].join('\n'))
    ge.setFooter(`Page ${index+1} of ${number.length}`)
    await m.edit(ge);
    return awaitReaction();
  }
  return awaitReaction();
}
function chunk(array, chunkSize) {
    const temp = [];
    for(let i = 0; i < array.length; i+= chunkSize) {
      temp.push(array.slice(i, i+chunkSize));
    }
    return temp;
  }
exports.help = {
  name: "emoji",
  description: "DM Someone",
  usage: "help"
}