const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const dinero = new db.crearDB('dinero')
const banco = new db.crearDB('banco')

module.exports = {
name: "dep",
aliases: ["deposit"],
usage: "dep",
description: "",
run: async(client, message, args) => {

  const user = message.author;

  const cantidad = args[0]
  if(!cantidad) return message.channel.send("Debes decir una cantidad")

  if(cantidad === 'max'){
    const cantidad = await dinero.obtener(`${user.id}`)

    dinero.restar(`${user.id}`, cantidad)
    banco.sumar(`${user.id}`, cantidad)

    message.channel.send(`Has depositado **${cantidad}**:coin: en el banco`)
  }
  if(cantidad === 'all'){
    const cantidad = await dinero.obtener(`${user.id}`)

    dinero.restar(`${user.id}`, cantidad)
    banco.sumar(`${user.id}`, cantidad)

    message.channel.send(`Has depositado **${cantidad}**:coin: en el banco`)
  }

  const dinerot = await dinero.obtener(`${user.id}`)

  if(cantidad > dinerot) return message.channel.send("No tienes tantas monedas")

  dinero.restar(`${user.id}`, cantidad)
  banco.sumar(`${user.id}`, cantidad)

  message.channel.send(`Guardaste **${cantidad}** monedas en el banco`)
if(message.deletable) message.delete()
 }

}