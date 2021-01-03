//LocalghostFI discord bot
const Discord = require('discord.js');
const bot = new Discord.Client();

const lg = require('./config.json');


//Discord API

bot.on ('ready', () => {
    console.log('LG Bot connected Flero Media Oy Discord server and Discord API')
    bot.user.setActivity('https://localghost.fi | LGBOT ' + (lg.version) + '')
});



bot.login(lg.token)
