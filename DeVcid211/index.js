keepAlive = require('./server');
const Monitor = require('ping-monitor');
 
keepAlive();
const monitor = new Monitor({
    website: 'https://DeVcid212.vcid21.repl.co',
    title: 'Secundaria',
    interval: 15 // minutes
});
 
monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`) );
monitor.on('error', (error) => console.log(error));
///////////////////////EMPIEZA/TU/BOT//////////////////////////////


const Discord = require("discord.js");
const prefix = '!'
const { readdirSync } = require("fs");
const fs = require('fs');
const { readdir } = require("fs");
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js')



client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
    });
});

    //Events "handler"
    fs.readdir('./events/', (err, files) => {
        if (err) console.log(err);
        files.forEach(file => {
            let eventFunc = require(`./events/${file}`);
            let eventName = file.split(".")[0];
            client.on(eventName, (...args) => eventFunc.run(client, ...args));
        });
});

client.on("ready", () => {
    presencia();  
    });
 
 
 
function presencia(){
  client.user.setPresence({
status: "dnd",
activity: {
  name: "Discord Development | Community Bot",
  type: "PLAYING"
 
}
  });
}

//respuesta de inicio
client.on("ready", () => {
    console.log("Bot Listo!");
    presence();
 });

//Verify
client.on("message", message => {
  if(message.channel.id === "874376942038708307"){
    if(message.author.bot) return;
    
    if(message.content === 'Verificar'){
      message.member.roles.add("874378122932420699");
      message.author.send("Gracias por verificarte");
      message.delete();
    }
    else{
      message.author.send("Problemas para veriificarte? \n\n1. Ve al canal de verifi \n2. Escribe **Verificar** \n3. Disfruta del server");
      message.delete();
    }
  }
client.on("guildMemberAdd", (member)=> {
  const embed = new Discord.MessageEmbed()

  .setTitle("Un usuario se ha unido")
  .setDescription(`El ususario **${member.user.username}** se ha unido al server!\n\n No olvides leerte las reglas para evitar problemas \n\n espero que la pases muy bien`)
  .setFooter("Bot by Vcid11 and Dxrltng")
  .setColor("Random")

  client.channels.cache.get("876477885010038865").send(embed) 
})


})
client.login("ODc1ODYxMDk2MDYwMzIxODUz.YRbrNg.ylMxxqeUkI7md6PmdElRC3M1Jjk");