const client = require("../index");
const { Collection } = require("discord.js")
const fs = require("fs")

client.on("ready", () => {
    client.user.setActivity(`🔥l!yardım - 🎗️#gecmisolsunturkiye`);     
console.log(`${client.user.tag} [KOMUTLAR YÜKLENİYOR]`)

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./commands/", (err, files) => {
if (err) console.error(err);
console.log(`[TOPLAM KOMUT] ${files.length} `);
files.forEach(f => {
let props = require(`../commands/${f}`);
    
console.log(`[KOMUT] ${props.help.name} `);
    
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);

});
});
});

});

console.log('[HİZMET]  25 adet sunucu 154 adet kanala ve 486 üyeye hizmet ediyor.')
console.log('[TURKİYE] #gecmisolsunturkiye')
