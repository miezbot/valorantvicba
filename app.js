const Discord = require("discord.js");
const music = new Discord.Client({ disableEveryone: true });
const fs = require("fs");
music.commands = new Discord.Collection();
const config = require("./config.json");
const http = require('http');
music.snipeMap = new Map();
const queue = new Map();
const emojiChannelID = "700798187916623922"
/////////////////////////
//const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
/////////////////////////
music.on("ready", async () => {
  music.user.setActivity('Valorant Indonesia', {Type: 'STREAMING', url:'https://www.twitch.tv/verterid'});
  console.log(`Logged in as : ${music.user.tag}`);
  console.log(`${music.user.username} is boy siap!`)

});

music.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) return console.log("There are no commands to load...");

  console.log(`Loading ${jsfiles.length} commands...`);
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${i + 1}: ${f} loaded!`);
    music.commands.set(props.help.name, props);
  });
});
music.afk = new Map();
music.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  
  if (message.content.includes(message.mentions.members.first())) {
    let mentioned = music.afk.get(message.mentions.users.first().id);
    if (mentioned) message.channel.send(`**${mentioned.usertag}** is currently afk. Reason: ${mentioned.reason}`);
  }
  let afkcheck = music.afk.get(message.author.id);
  if (afkcheck) return [music.afk.delete(message.author.id), message.reply(`you have been removed from the afk list!`).then(msg => msg.delete(5000))];

  if (!command.startsWith(prefix)) return;

  let cmd = music.commands.get(command.slice(prefix.length));
  if (cmd) cmd.run(music, message, args , queue);
});
music.on('message', message => {
	if (message.content === 'link') {
    var kontol = new Discord.RichEmbed()
    .setColor("#FF4654")
    .setTitle('Invite Bot')
    .addField('Klik','[Disini](https://discordapp.com/oauth2/authorize?client_id=700741959584579635&permissions=8&scope=bot)')
		message.channel.send(kontol);
	}
});

music.on('message', message=> {
    if (message.isMentioned(music.user)) {      
    message.author.sendMessage("**Halo terima kasih sudah mention aku tidak ada pesan penting yang ingin disampaikan.**");
    message.channel.send("Cek *DM* kamu ya!");
}
});

music.on('voiceStateUpdate',(oldMember, newMember) => {
  var state = null;  
  const kategorikanal = '700794615250288670'
  const channelid = '700795746382774323'
  if(!oldMember.voiceChannel && !newMember.voiceChannel) return;
  if(!oldMember.voiceChannel && newMember.voiceChannel) {state = "join"}
  else if(oldMember.voiceChannel && !newMember.voiceChannel) {state = "leave"}
  else if(oldMember.voiceChannel.id !== newMember.voiceChannel.id) {state = "move"}
  else if(oldMember.voiceChannel.id == newMember.voiceChannel.id) return;
  console.log(state);
  
  if(newMember.voiceChannelID === channelid){
    newMember.guild.createChannel(`Team | ${newMember.user.username}`,'voice')
    .then(tempChannel => {
      tempChannel.setParent(kategorikanal);
      newMember.setVoiceChannel(tempChannel.id);
      tempChannel.setUserLimit('5');
       
      
      })
  .catch(console.error)
}
  if(oldMember.voiceChannelID) {
         
     const voicelama = oldMember.guild.channels.get(oldMember.voiceChannelID);
    
  if(voicelama.name.startsWith(`Team | ${newMember.user.username}`)){
      let sawadikap = `**${newMember.user.username}'s**` + " **Team**"
      var koko = new Discord.RichEmbed()
      .setColor("#FF4654")
      .setThumbnail(`${newMember.user.avatarURL}`)
      .addField('**Good Game Well Played**',`${sawadikap}`)
      .setFooter("@Valorant Indonesia Community." , 'https://i.imgur.com/yPWqxxu.png') 
      voicelama.delete()
      .then(function() {
        music.channels.get('700796140244828270').send(koko)
  })
      .catch(console.error);
  }
    }
  })
////////
music.on("message", message => {
  if (message.content.startsWith('!announce')) {
    let rest_of_the_string = message.content.slice('!announce'.length); //removes the first part
    let array_of_arguments = rest_of_the_string.split(','); //[title, description, link, image]

    let embed = new Discord.RichEmbed()
      .setTitle(array_of_arguments[0])
      .setDescription(array_of_arguments[1])
      .setImage("https://media.discordapp.net/attachments/705108157378199593/716750373716492308/Ready_lineup.jpeg")
      .setURL(array_of_arguments[2])
      .setThumbnail("https://i.imgur.com/El12hFL.png")
      .setColor("#FF4654")
      .setFooter("Valorant Indonesia Community","https://i.imgur.com/AE0Vnot.png")
      .setTimestamp();

    message.channel.send({ embed });
  }
});
//////////////////
/*music.on("message", message => {
  if (message.content.startsWith('v!feedback')) {
    let rest_of_the_string = message.content.slice('v!feedback'.length) //removes the first part
    let array_of_arguments = rest_of_the_string.split(','); //[title, description, link, image]
    var embed = new Discord.RichEmbed()
    .setColor("FF4654")
    .setThumbnail(message.author.avatarURL)
     .setTitle(array_of_arguments[0])
     .setDescription(`Pesan Feedback :\n ${array_of_arguments[1]}!\n\nBerikan \`Reaksi\` kalian terhadap feedback ini!,antusias kalian bisa memberi kami lebih ingin mengembangkan komunitas.`)
     .setFooter("Saran Oleh " + message.author.username, message.author.avatarURL)
     .setTimestamp()
      message.channel.send({embed}).then(m => {
         m.react('📥');
         m.react('📤');
        })
  }
});*/
/////////////////
music.on('message', msg => {
  var kontol = new Discord.RichEmbed()
  .setColor("#FF4654")
  .setTitle("Error")
  .setDescription(`<@!${msg.author.id}> Maaf, Kamu tidak memiliki izin.`)
  if (msg.guild && msg.content.startsWith('v!dmall')) {
    if(msg.author.id !== '658775619659890741') return msg.channel.send(kontol)
    let text = msg.content.slice('v!dmall'.length); // cuts off the /private part
    msg.guild.members.forEach(member => {
      if (member.id != music.user.id && !member.user.bot) member.send(text);
    });
  }
});


/*async function emojiMessage(message, validReactions) {
            for (const reaction of validReactions) await message.react(reaction);
        const filter = (reaction, user) => validReactions.includes(reaction.emoji.name) && (!user.bot)

        return message
            .awaitReactions(filter, {
                max: 1,
                time: 10000
            })
            .then(collected => collected.first() && collected.first().emoji.name);
}*/

/*async function deleteMessage(message) {

    const emoji = await emojiMessage(message, ["☑","❌"]);
    console.log(emoji)
        // if the emoji is a tick:
    if (emoji === "☑") {
        // delete their message
        console.log("695844016088023050")
        if (message.deletable == true) {
            console.log("can delete")
            console.log("attempting to delete")
            message.delete()
            message.author.send("Baik, Kami akan Mengganti Nickname Anda.")
        }
        if (!message.deletable == false) {
            "cannot delete"
        }
    } else if (emoji === "❌") { // if the emoji is a cross
       message.author.send("Maaf Kami Tidak Bisa Mengubah Nickname Anda.")
      message.delete()
        return;
    }
}*/




/*music.on('message', message => {

    if (message.channel.id === emojiChannelID) {
        // runs the function
        deleteMessage(message)
    }
})*/

music.on("guildCreate", guild => {
    let channelID;
    let channels = guild.channels;
    channelLoop:
    for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }

    let channel = music.channels.get(guild.systemChannelID || channelID);
    channel.send(`Hai.. Terima kasih sudah invite aku!.`);
});

music.on('voiceStateUpdate',(lama, baru) => {
  var state = null;  
  const kategorikanal = '684210439399145502'
  const channelid = '717475625874751498'
  if(!lama.voiceChannel && !baru.voiceChannel) return;
  if(!lama.voiceChannel && baru.voiceChannel) {state = "join"}
  else if(lama.voiceChannel && !baru.voiceChannel) {state = "leave"}
  else if(lama.voiceChannel.id !== baru.voiceChannel.id) {state = "move"}
  else if(lama.voiceChannel.id == baru.voiceChannel.id) return;
  console.log(state);
  
  if(baru.voiceChannelID === channelid){
    baru.guild.createChannel(`Ranked | ${baru.user.username}`,'voice')
    .then(tempChannel => {
      tempChannel.setParent(kategorikanal);
      baru.setVoiceChannel(tempChannel.id);
      tempChannel.setUserLimit('5');
       
      
      })
  .catch(console.error)
}
  if(lama.voiceChannelID) {
         
     const voicelama = lama.guild.channels.get(lama.voiceChannelID);
    
  if(voicelama.name.startsWith(`Ranked | ${baru.user.username}`)){
      let sawadikap = `**${baru.user.username}'s**` + " **Team**"
      var koko = new Discord.RichEmbed()
      .setColor("#FF4654")
      .setThumbnail(`${baru.user.avatarURL}`)
      .addField('**Good Game Well Played**',`${sawadikap}`)
      .setFooter("@Valorant Indonesia Community." , 'https://i.imgur.com/yPWqxxu.png') 
      voicelama.delete()
      .then(function() {
        music.channels.get('717475755512299560').send(koko)
  })
      .catch(console.error);
  }
    }
  })
///////////////////////////////////////////////////////////////// TEST //////////////////////////////////////
music.on('voiceStateUpdate',(peka, dikit) => {
  let id = peka.displayName.toString().substr()
  let rest_of_the_string = id.split(' |'); //[title, description, link, image]
  let chan = `Team ${id}`
  var state = null;  
  const kategorikanal = '703616272272982082'
  const channelid = '703616272272982084'
  if(!peka.voiceChannel && !dikit.voiceChannel) return;
  if(!peka.voiceChannel && dikit.voiceChannel) {state = "join"}
  else if(peka.voiceChannel && !dikit.voiceChannel) {state = "leave"}
  else if(peka.voiceChannel.id !== dikit.voiceChannel.id) {state = "move"}
  else if(peka.voiceChannel.id == dikit.voiceChannel.id) return;
  console.log(state);
  
  if(dikit.voiceChannelID === channelid){
    dikit.guild.createChannel(`Team ${rest_of_the_string[0]}`,'voice')
    .then(tempChannel => {
      tempChannel.setParent(kategorikanal);
      dikit.setVoiceChannel(tempChannel.id);
      tempChannel.setUserLimit('6');
       
      
      })
  .catch(console.error)
}
  if(peka.voiceChannelID) {
         
     const voicelama = peka.guild.channels.get(peka.voiceChannelID);
    
  if(voicelama.name.startsWith(`Team ${rest_of_the_string[0]}`)){
      let sawadikap = `**${([rest_of_the_string[0]])}'s**` + " **Team**"
      var koko = new Discord.RichEmbed()
      .setColor("#FF4654")
      .setThumbnail(`${dikit.user.avatarURL}`)
      .addField('**Good Game Well Played**',`${sawadikap}`)
      .setFooter("@Valorant Indonesia Community." , 'https://i.imgur.com/yPWqxxu.png') 
      voicelama.delete()
      .then(function() {
        music.channels.get('718916359815168170').send(koko)
  })
      .catch(console.error);
  }
    }
  })
////////////////////////////////////////////////////////////////
music.on('voiceStateUpdate', (oldState, newState) => {
    if (!newState.channel || !newState.member) return; // Triggered if the user left a channel
    const testChannel = newState.guild.channels.cache.find(c => c.name === 'test');
    if (newState.channelID === testChannel.id) { // Triggered when the user joined the channel we tested for
        const role = newState.guild.roles.cache.find(r => r.name === 'roletest');
        if (!newState.member.roles.cache.has(role)) newState.member.addRole(role); // Add the role to the user if they don't already have it
    }
});
 music.login("NzAwNzQxOTU5NTg0NTc5NjM1.XtokuA.Cu2rjdyyDp0qmwtYS8El8MEoPKg");
