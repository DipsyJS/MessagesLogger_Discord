const { Client, Message } = require('discord.js');
const client = new Client();
const config = require('./config.sample');

client.on('ready', () => {
    console.log("Messages Logger est online.");
})
client.on('messageUpdate', (oldMessage, newMessage) => {
    if (oldMessage.content !== newMessage.content) {
        let c = newMessage.channel.guild.channels.cache.get(config.logsID);
        if (channel) {
            const embed = new MessageEmbed()
                .addField("Auteur:", newMessage.author.tag)
                .addField("Ancien message:", oldMessage.content)
                .addField("Nouveau message:", newMessage.content)
                .setTimestamp();
            return c.send(embed);
        } else {
            return message.channel.send("❌ | Aucun salon de logs enregistré. ")
        }
    }
})

client.on('messageDelete', (message) => {
    if (oldMessage.content !== newMessage.content) {
        let c = newMessage.channel.guild.channels.cache.get(config.logsID);
        if (channel) {
            const embed = new MessageEmbed()
                .setDescription("`👨‍💻` Auteur : " + `**${message.author.tag}**` + ` \`(${message.author.id})\` a supprimé son message\n` + `\n\`\`\`${message.content.replace(/`/g, "'")}\`\`\`\n` + "`📙` ID : " + message.id)
            return c.send(embed);
        } else {
            return message.channel.send("❌ | Aucun salon de logs enregistré. ")
        }
    }
})

client.login(config.token);