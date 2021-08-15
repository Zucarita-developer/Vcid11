const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "jumbo",
aliases: ["emoji"],
usage: "jumbo <emoji>",
description: "Returns provided text in Embed form.",
run: async(client, message, args) => {
 if(!args[0]) return message.channel.send("debes decirme un emoji")

 let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
 if(!emoji) return message.channel.send("ese no es un emoji valido")

 const embed = new Discord.MessageEmbed()

 .setTitle("Emoji")
.setImage(emoji.url)
.setColor("RANDOM")

message.channel.send(embed)

}

}
