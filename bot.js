const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', function(){
    console.log('ExtraBot!');
    //client.user.setActivity('Do ok google help for commands!');
});

function coinflip() {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}

function iN(a){return/^\d+$/.test(a);}function iO(a){return a.match('^[/*+-]{1}$')==null?!1:!0;}mC={'/':function(a,b){return a/b;},'*':function(a,b){return a*b;},'-':function(a,b){return a-b;},'+':function(a,b){return a+b;}};
function cL(a){return a.replace(/[\[\]]/g, "");}
function tL(a){return a.toLowerCase();}


client.on('message', message => {
    if (tL(message.content) === '.extra flip a coin') {
        message.reply(coinflip());
    }
});
        client.on('message', message => {
    if (tL(message.content) === '.extra') {
        message.channel.send('Sah dude, I am ExtraBot made by Extra Bot Making Company Founded by OOOPS and Agent 1');
    }
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
