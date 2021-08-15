const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require ("discord.js");

module.exports = {
name: "ban",
aliases: ["banear"],
usage: "ban <banear a gays>",
description: "Returns provided text in Embed form.",
run: async(client, message, args) => {

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No tienes el permiso para banear! 😡")

    let user = message.mentions.members.first();

    let Banreason = args.join(' ').slice(1);
    
    
    if(!user) return message.channel.send("Debes mencionar a alguien! 👐")

    if(message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.channel.send("No puedes banear a una persona de igual o mayor poder que tu! ❌")

    if(user === message.author) return message.channel.send("no te puedes banear a ti mismo! ❓")

    if(!Banreason) return message.channel.send("Debes escribir una razon!")
if(message.deletable) message.delete()
    user.ban({ reason:Banreason })



  }

}
