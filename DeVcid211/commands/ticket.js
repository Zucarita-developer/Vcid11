const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "ticket",
aliases: [""],
usage: "tickets",
description: "",
run: async(client, message, args) => {

let everyone = message.guild.roles.cache.find(rol => rol.name == "@everyone")

let e = message.guild.channels.cache.find(canal => canal.name == `Ticket${message.author.username}`)
if(e) return message.channel.send("no puedes crear un ticket ya tienes otro abierto.")

const razon = args.join(" ")
if(!razon) return message.channel.send("Debes escribir una razon")

const embed = new Discord.MessageEmbed()

.setTitle("Ticket creado.")
.setDescription(`ticket creado por **${message.author.tag}\n\n\ Motivo: **${razon}`)
.setTimestamp()
.setColor("GREEN")

message.guild.channels.create(`Ticket-${message.author.username}`,{
  permissionOverwrites: [
    {
      id: everyone.id,
      deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
    },
    {
      id: message.author.id,
      allow: ["VIEW_CHANNEL","SEND_MESSAGES"]
    }
  ],
   parent: "874376942038708308"
}).then((c) => c.send(embed)).then((msg) =>{
  msg.react("📁")

  msg.awaitReactions((reaction, user) =>{
    if(message.author.id !== user.id) return;
    if(reaction.emoji.name === "📁"){
      msg.channel.delete()
    }
  })
})

message.channel.send("ticket creado correctamente")

}

}


