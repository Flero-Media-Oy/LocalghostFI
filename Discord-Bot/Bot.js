//LocalghostFI discord bot
const { Client, MessageEmbed } = require('discord.js');
const bot = new Client();

const lg = require('./config.json');



//Discord API

bot.on ('ready', () => {
    console.log('LG Bot connected Flero Media Oy Discord server and Discord API')
    bot.user.setActivity('https://localghost.fi | LGBOT ' + (lg.version) + '')
});


bot.on("message", message => {
    if (message.author.bot) return;
  
    const prefix = '?'
    if (message.content.indexOf(prefix) !== 0) return;
  
  const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();
  
    if (command ==='!verkkokauppa') {
      message.channel.send(' Palvelimet: <https://store.localghost.fi> \n 3D tulostus & muut: <https://localghost.fi/store>')
    } else
    if (command ==='!tukipyyntö') {
        message.channel.send('Voit luoda tukipyynnön täällä <#793996815107751936> kanavalla tai sähköpostitse contact@localghost.fi')
    }else{
      
          message.channel.send()
    }  
  });

  
  bot.on('messageDelete', message => {
    if(!message.partial) {
        const channel = bot.channels.cache.get('800350178380742727');
        if(channel) {
            const embed = new MessageEmbed()
                .setTitle('Poistettu viesti')
                .addField('Käyttäjä', `${message.author.tag} (${message.author.id})`, true)
                .addField('Kanavalta', `${message.channel.name} (${message.channel.id})`, true)
                .setDescription(message.content)
                .setTimestamp();
            channel.send(embed);
        }
    }
});


bot.login(lg.token)
