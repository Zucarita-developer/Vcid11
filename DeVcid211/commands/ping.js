module.exports = {
    name: "ping",
    aliases: ['latency'],
    description: "Shows your bot latency",
    usage: "ping",
    run: async (client, message, args) => {
        const m = await message.channel.send("Ping?")
        m.edit(`Pong!\nEl mensaje se edito en ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord api sus ms son: ` + Math.round(client.ws.ping) + ``)
    }
};