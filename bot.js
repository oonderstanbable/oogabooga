const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', function(){
    console.log('ExtraBot!');
});

client.login('TOKEN');
