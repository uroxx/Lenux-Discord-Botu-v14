const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setTitle("--------**CLUTCH**--------")
        .setDescription("__**Hos geldin.Lutfen emojiye basip rolunu almayi unutma!**__")
    .setColor("#007fff")
    .setTimestamp()
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "test"
};