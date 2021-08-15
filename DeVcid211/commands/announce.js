const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "announcement",
aliases: ["announce"],
usage: "embed <text to say>",
description: "Returns provided text in Embed form.",
run: async(client, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`:x:| You Require Manage Messages Permission to use this Command`)
 await message.delete()
  let saying = message.content.split(" ").slice(1).join(" ")
  if(!saying) return message.channel.send(`:x:| `+"I Cannot Repeat Blank Message")
  let embed = new MessageEmbed()
.setAuthor("📣 | Annoucements")
.setDescription(`${saying}`)
.setColor("RANDOM")
.setFooter(`Att: Server Managment.`)
.setTimestamp()
  message.channel.send(embed)
}

}
