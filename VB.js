/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// import the discord.js module
const Discord = require('discord.js');
const Client = require('discord.js').Client
const music = require('discord.js-music');
const Auth = require('./auth.json');

// create an instance of a Discord Client, and call it bot
const bot = new Discord.Client();
const client = new Client();

music(client);

// the token of your bot - https://discordapp.com/developers/applications/me
const token = Auth;

// the ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted.
bot.on('ready', () => {
  console.log('I am ready!');
});

// create an event listener for messages
bot.on('message', message => {
    const channel = message.member.voiceChannel;
    // if the message is "ping",
    if (message.content === 'ping'
)
{
    // send "pong" to the same channel.
    message.channel.sendMessage('pong');
}

if (message.content == '!embed') {
    if (message.author.name != 'Voxel') {
        message.channel.sendMessage('REEEEEEEEEE FUCKING NORMALFAGS')
        channel.join()


    } else {
        (message.channel.sendMessage('REE'))
    }
}
music(client, {
    prefix: '-',     // Prefix of '-'.
    global: false,   // Server-specific queues.
    maxQueueSize: 10 // Maximum queue size of 10.
});
});
// log our bot in
    bot.login(Auth.token);