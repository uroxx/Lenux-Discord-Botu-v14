const Discord = require("discord.js");
exports.run = async (client, message, args) => {

    if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator))
    return message.channel.send("Gerekli Yetkin Yok!")

  if (!message.member.voice.channel)
    return message.reply("Herhangi bir ses kanalında değilsin.");
  let kullanıcı = message.mentions.members.first();
  if (!kullanıcı)
    return message.reply(
      "Birini etiketlemelisin Örnek: l!sesli-çek <kişi>"
    );
  if (!kullanıcı.voice.channel)
    return message.reply("Etiketlediğin kişi herhangi bir ses kanalında değil.");

  kullanıcı.voice.setChannel(message.member.voice.channelId)
  message.channel.send("**Tamamdır.Yanına Çektim.**");
};

exports.conf = {
  aliases: []
};

exports.help = {
  name: "ses-çek"
};