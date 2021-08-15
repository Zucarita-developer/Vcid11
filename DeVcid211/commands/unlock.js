const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "unlock",
aliases: [""],
usage: "unlock",
description: "unlock channels",
run: async(client, message, args) => {

var perms = message.member.hasPermission("MANAGE_CHANNELS")
if(!perms) return message.channel.send("No tienes suficientes permisos")

if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("No tengo suficientes permisos para unbloquear el canal")

const everyone = message.guild.roles.cache.find(
  peo => peo.name === ("everyone")
);

message.channel.updateOverwrite(everyone, {SEND_MESSAGES: true})

message.channel.send("El canal ha sido unbloqueado con exito")
}

}
