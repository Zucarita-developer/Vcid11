const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "lock",
aliases: [""],
usage: "lock ",
description: "bloquear un canal",
run: async(client, message, args) => {

var perms = message.member.hasPermission("MANAGE_CHANNELS")
if(!perms) return message.channel.send("No tienes suficientes permisos")

if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("No tengo suficientes permisos para bloquear el canal")

const everyone = message.guild.roles.cache.find(
  peo => peo.name === ("everyone")
);

message.channel.updateOverwrite(everyone, {SEND_MESSAGES: false})

message.channel.send("El canal ha sido bloqueado con exito")
}

}
