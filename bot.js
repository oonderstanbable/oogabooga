const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', function(){
    console.log('Wonder Bot!');
    //client.user.setActivity('Do ok google help for commands!');
});

function coinflip() {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}

function ball() {
    choices = ["penis","please try again","hey there qt","you're a hawty","you are beautiful just the way you are","I love you","I'm gonna ban you","ez"];
    return choices[Math.floor(Math.random() * 8)];
}

function iN(a){return/^\d+$/.test(a);}function iO(a){return a.match('^[/*+-]{1}$')==null?!1:!0;}mC={'/':function(a,b){return a/b;},'*':function(a,b){return a*b;},'-':function(a,b){return a-b;},'+':function(a,b){return a+b;}};
function cL(a){return a.replace(/[\[\]]/g, "");}
function tL(a){return a.toLowerCase();}


client.on('message', message => {
    if (tL(message.content) === '.wonder flip a coin') {
        message.reply(coinflip());
    }
});
    
        let embed = new Discord.RichEmbed()
        .setColor(0x4286f4)
        .addField("Hey, I am Wonder Bot", "welcome")
        .addField("Made by **OOOPS#9915** here is a link to our discord", "https://discord.gg/ehTXFJj");
client.on('message', message => {
    if (tL(message.content) === '.wonder') {
        message.channel.sendEmbed(embed);

    }
});

client.on('message', message => {
    if (tL(message.content) === '.wonder ball') {
        message.reply(ball());
    }
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
