const { Client, Intents, Collection } = require("discord.js");
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

const prefix = '!';

const fs = require('fs');

client.commands = new Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Bot is online!');
});
 
client.on('messageCreate', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    let cmd = client.commands.get(command);

if(!cmd) return message.channel.send("```this command does not exist```");

cmd.execute(client, message, args);

});





client.login("OTM0OTE3MTg1NDkzNjg4MzUx.Ye3Deg.NB50J5EBfAMrjIc6CmFmyiThmzg");



























