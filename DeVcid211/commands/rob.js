const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const dinero = new db.crearDB('dinero')

module.exports = {
name: "rob",
aliases: ["rob"],
usage: "",
description: "",
run: async(client, message, args) => {

  const user = message.author
  const persona = message.mentions.users.first();

  if(!persona) return message.channel.send("Debes mencionar a alguien")

  let dineropersona = await dinero.obtener(`${persona.id}`)
  let dinerouser = await dinero.obtener(`${user.id}`)

  let dineroaleatorio = Math.floor(Math.random() * dineropersona) + 1

  if(persona.id === message.author.id) return message.channel.send("No te puedes robar a ti mismo pendej@")
  if(!isNaN(args[0])) return message.channel.send("Eso no es un usuario valido")

  if(dineropersona < 300) return message.channel.send("Esa persona tiene muy poco dinero no seas mal@")
  if(!dinero.tiene(`${persona.id}`)) return message.channel.send("Esta persona no tiene dinero F")

  let resultadomalo = ['mal']
  let resultadobueno = ['bien']
  let resultado = [resultadomalo, resultadobueno]
  let resultadofinal = resultado[Math.floor(Math.random() * resultado.lenght)]

  //let posibilidades = ['bien', 'mal']
  //let posibilidadfinal = posibilidades[Math.floor(Math.random() * posibilidades.lenght)]

  if(resultadofinal === resultadomalo){
    dinero.restar(persona.id, dineroaleatorio)

    dinero.sumar(user.id, dineroaleatorio)

    message.channel.send(`Has robado a ${persona.tag} y has conseguido **${dineroaleatorio}**:coin:`)
  }
  
  if(resultadofinal === resultadobueno){
    dinero.restar(user.id, dineroaleatorio)

    dinero.sumar(persona.id, dineroaleatorio)

    message.channel.send(`Has intentado robar a ${persona.tag} y has perdido **${dineroaleatorio}**:coin`)
    if(message.deletable) message.delete()
  }

 }

} 