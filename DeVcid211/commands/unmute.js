module.exports = {
name: "unmute",
aliases: ["unmute"],
usage: "unmute",
description: "",
run: async(client, message, args) => {
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> a sido unmuteado ✅`);
        } else{
            message.channel.send('Usuario no encontrado 👨');
        }
    }
}
