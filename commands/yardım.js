const { EmbedBuilder } = require("discord.js")
const diskord = require("discord.js")
const debe = require("croxydb")
const config = require("../config.js")
const { instagram, website } = require("../config.js")
exports.run = async (client, message, args) => {
    const topgg = config.topgg
    const davet = config.botdavet
    const destek = config.desteksunucusu
    const value = args[0]

  const embed = new diskord.EmbedBuilder()
  .setTitle("Kategoriler")
  .setDescription(`❤️ **l!yardım ayarlamalı |** Ayarlamalı yetkili komutlarını gösterir.\n\n🔥 **l!yardım eğlence |** Eğlence Komutlarını Gösterir.\n\n🤝 **l!yardım kullanıcı |** Kullanıcı Komutlarını Gösterir.\n\n💀 **l!yardım yetkili |** Yetkili Komutlarını Gösterir.\n\n🤖 **l!yardım bot |** Bot Komutlarını Gösterir\n\n 🔗 **Lenux Bağlantılar** \n[Website](${website})\n[Botu Sunucuna Ekle](${davet})\n[Destek Sunucum](${destek})\n[Bota Oy Ver](${topgg})`)
  if(!args[0]) return message.channel.send({embeds: [embed]})
if(value === "bot") {
const embed = new diskord.EmbedBuilder()
.setTitle("🫶 Ana Komutlar 🫶")
.setDescription("**l!istatistik |** Botun istatistiklerini gösterir__**Çalışmıyor**__\n**l!linkler |** Botla Alakalı Linkleri Alırsınız\n**l!oyver |** Botun oy verme linkini ve birkaç bilgi alırsınız\n**l!ping |** Botun pingini gösterir")
message.channel.send({embeds: [embed]})
}
if(value === "yetkili") {
const embed = new diskord.EmbedBuilder()
.setTitle("🫶 Yetkili Komutları 🫶")
.setDescription("**l!ban | ** Etiketlediğiniz kişiyi sunucudan yasaklar\n**l!ban-list |** Sunucundan Banlanan üyeleri gösterir\n**l!forceban |** ID'sini belirttiğiniz kullanıcıyı sunucudan yasaklar\n**l!kanal-açıklama |** Bulunduğunuz kanalın konusunu/açıklamasını değiştirir\n**l!kick |** İstediğiniz kişiyi sunucudan atar\n**l!rol-al** | Belirtilen kullanıcıdan istediğiniz rolü alır\n**l!rol-oluştur** | Yazılan Adda Rol Oluşturulur\n**l!rol-ver** | Belirtilen kullanıcıya istediğiniz rolü verir")
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**l!sesli-çek |** Etiketlediğiniz kullanıcıyı yanınıza çeker\n**l!temizle |** Belirtilen miktar mesajı siler\n**l!unban |** Belirtilen kişinin banını kaldırır\n**l!slowmode** | Kanalda yavaşmod'u ayarlarsınız")
message.channel.send({embeds: [embed2]})
}
if(value === "eğlence") {
const embed = new diskord.EmbedBuilder()
.setTitle("🫶 Eğlence Komutları 🫶")
.setDescription("**l!alkış |** Bot Alkışlar\n**l!aşkölçer |** Bot etiketlediğiniz kişiye karşı olan aşkını ölçer\n**l!emojiyazı |** Bot mesajınızı emoji haline getirir\n**l!hackle |** Etiketlediğiniz kişiyi hackler\n**l!kaçcm |** Malafatının uzunluğunu söyler")
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**l!sarıl |** Etiketlediğiniz kişiye sarılırsınız\n**l!slot |** Slots oyununu oynar\n**l!şanslısayım |** Bot Şanslı sayınızı tahmin eder")
message.channel.send({embeds: [embed2]})
}
if(value === "kullanıcı") {
const embed = new diskord.EmbedBuilder()
.setTitle("🫶 Kullanıcı Komutları 🫶")
.setDescription("**l!afk |** AFK olunca seni etiketleyen kişiye sebebini yazar\n**l!atatürk |** Atatürk fotoğrafı gönderir\n**l!avatar |** Etiketlediğiniz kişinin avatarını gösterir\n**l!emojiler |** Sunucuda bulunan emojileri gösterir\n**l!hesapla |** Belirtilen işlemi yapar\n**l!kurucu-kim |** Sunucunun kurucusunu söyler")
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**l!minecraft |** Belirlediğiniz Minecraft sunucusunun bilgilerini verir__**Çalışmıyor**__\n**l!not-al |** Bot not alır\n**l!notum |** Notunuzu gösterir\n**l!radyo |**  Sesli kanaldan Radyo dinlersiniz\n**l!sunucubilgi |** Bulunduğun sunucu hakkında bilgi verir")
message.channel.send({embeds: [embed2]})
}
if(value === "ayarlamalı") {
const embed = new diskord.EmbedBuilder()
.setTitle("🫶 Ayarlamalı Komutları 🫶")
.setDescription("**l!küfürengel |** Küfür engelleme sistemini ayarlamanızı sağlar\n**l!reklamengel |** Reklam engelleme sistemini ayarlamanızı sağlar\n**l!oto-cevap |** Belirtilen yazıyı biri yazarsa bot belirtilen cevabı vermeye ayarlanır\n**l!otorol |** Sunucuya girenlere verilecek olan otorolü ayarlar\n**l!ototag |** Bot belirtilen tagı sunucuya girenlerin isimlerinin başına koyar\n**l!sa-as |** Oto sa-ası ayarlarsınız\n**l!sayaç |** Sayacı ayarlarsınız")
message.channel.send({embeds: [embed]})
}
}

exports.conf = {
  aliases: []
}

exports.help = {
  name: "yardım"
}