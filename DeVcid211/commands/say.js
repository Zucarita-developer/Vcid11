const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "say",
aliases: ["say"],
usage: "embed <text to say>",
description: "Returns provided text in Embed form.",
run: async(client, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`:x:| Permisos insuficientes!`)
 await message.delete()
  let saying = message.content.split(" ").slice(1).join(" ")
  if(!saying) return message.channel.send(`:x:| `+"I Cannot Repeat Blank Message")
  let embed = new MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL())
.setDescription(`${saying}`)
.setColor("RANDOM")
.setFooter(`Embed by ${message.author.username}`)
.setTimestamp()
  message.channel.send(embed)
}

}
