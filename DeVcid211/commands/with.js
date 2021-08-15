const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const dinero = new db.crearDB('dinero')
const banco = new db.crearDB('banco')

module.exports = {
name: "With",
aliases: ["With"],
usage: "",
description: "",
run: async(client, message, args) => {

  const user = message.author;

  const cantidad = args[0]
  if(!cantidad) return message.channel.send("Debes decir una cantidad")

  if(cantidad === 'max'){
    const cantidad2 = await banco.obtener(`${user.id}`)

    dinero.sumar(`${user.id}`, cantidad2)
    banco.restar(`${user.id}`, cantidad2)

    message.channel.send(`Sacaste **${cantidad2}**:coin: del banco`)
  }

  const cantidadt = await banco.obtener(`${user.id}`)

  if(cantidadt < cantidad){
    return message.channel.send("No tienes tanto dinero!")
  }

  dinero.sumar(`${user.id}`, cantidad)
  banco.restar(`${user.id}`, cantidad)

  message.channel.send(`Has sacado **${cantidad}**:coin: del banco`)
if(message.deletable) message.delete()
 }

} 