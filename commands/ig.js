const Discord = require("discord.js");
const chalk = require("chalk");
const { stripIndents } = require("common-tags");
const fetch = require("node-fetch");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    const instagramName = args.join(" ");
    if (!instagramName)
      return message.channel.send("Please supply a valid instagram user.");

    const url = `https://instagram.com/${instagramName}/?__a=1`;
    const result = await fetch(url).then(url => url.json());
    console.log(result);
    if (!result) return message.channel.send("test");
    if (!result.graphql.user)
      return message.channel.send(" I counld not find that instagram user.");
    const account = result.graphql.user;
    const accountLink = `https://instagram.com/${instagramName}/`;
    const embed = new Discord.RichEmbed()
      .setColor("0000ff")
      .setTitle(`${account.full_name}'s Profile`)
      .setURL(accountLink)
      .setThumbnail(account.profile_pic_url_hd)
      .addField(
        "Profile Information",
        `**Username** ${account.username}
**Biography:** ${account.biography.lenght == 0 ? "None" : account.biography}
**Posts:** ${account.edge_owner_to_timeline_media.count}
**Followers:** ${account.edge_followed_by.count}
**Following:** ${account.edge_follow.count}
**Private Account:** ${
          account.is_private
            ? "Yes, this profile is priavte."
            : "Nope, this isn't priavte."
        }
**Verified Account:** ${
          account.is_verified
            ? "Yes, this profile is verified."
            : "Nope, this profile isn't verified."
        }`
      )
      .setFooter(message.author.username, message.author.displayAvatarURL);

    message.channel.send(embed);
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the help command: "),
      err
    );
    message.channel.send("Sorry, I couldn't find that user.");
  }
};

exports.help = {
  name: "ig",
  description: "DM Someone",
  usage: "help"
}