const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "socials",
    description: "Social Embed",
    execute(message, args, Discord){
        const socialEmbed = new MessageEmbed()


        .setColor("GREEN")
        .setTitle("RedWAllFlower Art's Socials!")
        .setDescription("*Follow all of our socials for amazing art! & more!*")
        .setThumbnail('https://images-ext-1.discordapp.net/external/Ah-L8c5lGRoPGEMxPN4Kr66PEgLE7lCfknwNMgdbiX0/%3Fwidth%3D460%26height%3D460%26photoVersion%3D1/https/pics.venmo.com/e4e84125-85d1-4add-8fc1-421a0af82974')
        .addFields(
            {name: 'YouTube', value: "[HERE](https://www.youtube.com/channel/UCCC1uLQliDs_Zhnmzm6fcqg)"},
            {name: 'Twitter', value: "[HERE](https://twitter.com/RedArt31935761)"},
            {name: 'Instagram', value: "[HERE](https://www.instagram.com/redwallflower_art/)"},
            {name: 'Facebook', value: "[HERE](https://www.facebook.com/profile.php?id=100077386958087)"},
        )




        message.channel.send({ embeds: [socialEmbed] });



    }
}