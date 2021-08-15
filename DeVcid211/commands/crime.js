const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const dinero = new db.crearDB('dinero')
const crimin = new db.crearDB('criminalidad')

module.exports = {
name: "crime",
aliases: ["crimen"],
usage: "crime",
description: "",
run: async(client, message, args) => {

  

  const user = message.author

  if (!dinero.tiene(`${user.id}`))
    dinero.establecer(`${user.id}`, 0)
    if (!crimin.tiene(`${user.id}`))
    dinero.establecer(`${user.id}`, 0)

  const crimenes = ['ha robado un banco', 'ha robado en una casa']

  const crimenesmalos = ['ha robado un banco', 'ha robado en una casa']

  let resultadosbuenos = crimenes[Math.floor(Math.random() * crimenes.length)]

  let resultadosmalos = crimenesmalos[Math.floor(Math.random() * crimenesmalos.length)]

  let resultados = [resultadosbuenos, resultadosmalos]

  let resultadofinal = resultados[Math.floor(Math.random() * resultados.length)]

  let dinerobueno = Math.floor(Math.random() * 175) + 100

  let dineromalo = Math.floor(Math.random() * -175) + -100

  let crim = Math.floor(Math.random() * 2) + 1

  if(resultadofinal === resultadosbuenos){

    dinero.sumar(`${user.id}`, dinerobueno)
    criminal.sumar(`${user.id}`, crim)

    const embed1 = new Discord.MessageEmbed()

    .setTitle("Crime")
    .setDescription(`**${user}**, has robado en **${resultadosbuenos}** y has ganado **${random}$**. Además, tu criminalidad ha subido **${crim}** nivel(es)`)
    .setColor("RANDOM")

    message.channel.send(embed1)

    return;

  }

  if(resultadofinal === resultadosmalos){

    dinero.sumar(`${user.id}`, dineromalo)

    const embed2 = new Discord.MessageEmbed()

    .setTitle("Crime")
    .setDescription(`${user} ${resultadosmalos} y ha perdido ${dineromalo}`)
    .setColor("RANDOM")
if(message.deletable) message.delete()
    message.channel.send(embed2)

    return;

  }


 }

} 