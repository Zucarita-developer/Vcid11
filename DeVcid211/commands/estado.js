const Discord = require('discord.js');

module.exports = {
name: "estado",
aliases: ["estado"],
usage: "estado",
description: "",
run: async(client, message, args) => {

if(message.author.id=== '698121977961119785 , ' ){

  var estadoperso = message.content.split(' ').slice(1).join(' ');
  if(!estadoperso){
    message.reply('Debes escribir a que quieres que me ponga')
    return
  }else{
    client.user.setActivity({name:estadoperso, type:0})
    message.reply("Estado cambiado con exito")
    return
  }
}

  return message.reply("Lociento no puedes usar este comando")


  }
}