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
    .then(async tempChannel => {
     await tempChannel.setParent(kategorikanal);
  await tempChannel.setUserLimit("6");
   await tempChannel.lockPermissions()
	.then(() => console.log('Successfully synchronized permissions with parent channel'))
	.catch(console.error);
       tempChannel.overwritePermissions(peka.id, {
        CONNECT: true,
        MANAGE_CHANNELS: true,
         MOVE_MEMBERS : true                                    
      })
     
      peka.setVoiceChannel(tempChannel.id);
      })

  .catch(console.error)
}
   const voicelama = dikit.guild.channels.get(dikit.voiceChannelID);
 if(peka.voiceChannel) {
        let filter = (ok) =>
            (ok.parentID == kategorikanal)
            && (ok.id !== channelid)
            && (peka.voiceChannelID == ok.id)
            && (peka.voiceChannel.members.size == 0);
        
        return peka.guild.channels
            .filter(filter)
            .forEach((ch) => ch.delete());
    }
  })
////////////////////////////////////////////////////////////////
 music.login(process.env.BOT_TOKEN);
