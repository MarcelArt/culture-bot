require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

client.once('ready', () => {
  console.log('bot is online');
});

client.on('message', message => {
  // ============== Uncomment this if you use a prefix =================
  // if(!message.content.startsWith(prefix) || message.author.bot) {
  //   return;
  // }
  // const args = message.content.slice(prefix.length).split(/ +/);
  // const command = args.shift().toLowerCase();
  // ============== Prefix configuration ends here ======================
  if(!message.author.bot) {
    // let regXp1 = /\s[0-9]{6,6}\s/g;
    let regXp2 = /[0-9]{6,6}/g;
    let nuclears = message.content.match(regXp2);
    if(nuclears !== null) {
      // message.channel.send('https://youtube.com/' + nuclears[0].replace(/\s/g, ''));

      let nukeEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Culture Bot')
        .setAuthor(message.author.username, message.author.avatarURL())
        .setDescription('Hey I see some 6 digits number on your message ( ͡° ͜ʖ ͡°) let me help everybody here what it means 😳');
      
      nuclears.forEach((nuke, i) => {
        nukeEmbed.addField(`Sauce ${i + 1}`, `${process.env.BASE_URL}${nuke}`, true);;
      });

      message.channel.send(nukeEmbed);
    }

  }
});

client.login(process.env.BOT_TOKEN);