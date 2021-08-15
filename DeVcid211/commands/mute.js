const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const mute = new db.crearDB('mute')
const ms = require('ms')

module.exports = {
name: "mute",
aliases: ["mute"],
usage: "mute",
description: "",
run: async(client, message, args) => {

  var perms = message.member.hasPermission("MANAGE_ROLES")
  if(!perms) return message.channel.send("No tienes suficientes permisos ")

  let mencionado = message.mentions.members.first()
  if(!mencionado) return message.channel.send("Debes mencionar a alguien")

  var razon = args[2]
  if(!razon){
    razon = 'No especificado'
  }

  if(!mute.tiene(message.guild.id)) return message.channel.send("Este servidor no tiene ningun rol para mutear. Para añadirlo, ponga `mute`")

  let rol = await mute.obtener(message.guild.id)

  if(mencionado.roles.cache.has(rol)) return message.channel.send("Este usuario ya esta muteado ")

  mencionado.roles.add(rol)

  const non = new Discord.MessageEmbed()
  .setTitle(`:loud_sound: Usuario no silenciado`)
  .setDescription(`El usuario **${mencionado}** ha sido des muteado`)
  .addField("Razón:", `${razon}`)
  .addField("Staff responsable:", `${message.author.tag}`)


  const mom = new Discord.MessageEmbed()
  .setTitle(`:mute: Usuario silenciado`)
  .setDescription(`El usuario ${mencionado} ha sido muteado durante **${time}**`)
  .addField("Razón:", `${razon}`)
  .addField("Staff responsable:", `${message.author.tag}`)

  message.channel.send(mom)

  await setTimeout(async function() {

    await mencionado.roles.remove(rol)

    await message.channel.send(non).catch(error => {
     message.channel.send(`Hubo un error inesperado ${error}`)
    })

  }, timer)
if(message.deletable) message.delete()
 }

}