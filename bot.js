const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("736896170105897011")
setInterval(function() {
channel.send(`هلا 
نورت السيرفر`);
}, 30)
})

client.login(process.env.BOT_TOKEN);