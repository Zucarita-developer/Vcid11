const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "suggest",
    aliases: [],
    description: "Make a suggestion and have the community vote",
    category: "utility",
    usage: "suggest <suggestion>",
    run: async (client, message, args) => {
        let suggestion = args.slice(0).join(" ");
        let SuggestionChannel = message.guild.channels.cache.find(channel => channel.name === "suggest");
        if (!SuggestionChannel) return message.channel.send("Por favor cree el canal llamado **suggest** para que funcione correctamente el bot!");
        const embed = new MessageEmbed()
            .setTitle("Nueva Sugerencia")
            .setDescription(suggestion)
            .setColor("RANDOM")
            .setFooter(`${message.author.tag} | ID: ${message.author.id}`)
            .setTimestamp()
        SuggestionChannel.send(embed).then(msg => {
            msg.react("👍🏼")
            msg.react("👎🏼")
        message.channel.send("Tu sugerencia ha sido correctamente enviada");
        });
    }
}