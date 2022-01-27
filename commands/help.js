const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "help",
    description: "Help Embed",
    execute(message, args, Discord){
        const helpEmbed = new MessageEmbed()


        .setColor("GREEN")
        .setTitle("All Of My Commands Will Be Listed Here")
        .setDescription("*Here are all of my commands! If you habve any questions let the owner know! If one of the commands are not working let us know! keep in mind, this bot is still in development, so not everything is going to work __YET__*.\n\n**CHECK THE 2 OTHER BOTS FOR SETTING UP WELCOME MESSAGES & TICKETS**\n<@!935382762276393010><@!935428167953444876>")
        .addFields(
            {name: 'Fun Commands', value: '`!socials`\n*All Of the Socials will be linked there!*\n\n`!Quotes`\n*Famous quotes from experienced Artists!*\n\n`!Tips`\n*You get tips for Art! How to make your art look so much better!*\n\n`!Famousart`\n*Youll get randomized pictures of famous paintings with their authors!*'},
            {name: 'Moderation Commands', value: '`!Warn`\n*Warn a user for a reason!*\n\n`!Kick`\n*Kick a user from the server*\n\n`!Ban`\n*Ban a user from the server*'},
        )
        



        message.channel.send({ embeds: [helpEmbed] });



    }
}