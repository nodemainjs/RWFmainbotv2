const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "poll",
    async execute(client, message, args) {
            const chnel = client.channels.cache.get("935767310583603250")
            const question = args.join(' ')
            if (args[0]) {
                const poll = new MessageEmbed()
                    .setTitle("__**Poll!**__")
                    .setDescription('```' + question + '``` \n\n✅ = YES \n❌ = NO')
                    .setColor('RANDOM')
                    .setFooter(`Poll author: ${message.author.tag}`)
                    .setTimestamp()
                    chnel.send({embeds: [poll]});
                await poll.react('✅')
                await poll.react('❌')
            }

            else {
                const embed = new MessageEmbed()
                    .setTitle("❌ You need to ask a poll question!")
                    .setDescription('Example: `Should I go biking?`')
                    .setColor('RANDOM')
                message.reply({embeds: [embed]})
            }

    }
}