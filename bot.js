const Discord = require('discord.js');
const client = new Discord.Client();

client.on("guildDelete", guild => {
    console.log('ExtraBot!');
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    //client.user.setActivity('Do ok google help for commands!');
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("message", async message => {
 if(message.content.indexOf(config.prefix) !== 0) return;   
 if(command === "kick") {
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
     
      let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
   
     let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
 }

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

    
        let embed = new Discord.RichEmbed()
        .setColor(0x4286f4)
        .addField("Hey, I am extra bot", "welcome")
        .addField("Made by **OOOPS#9915** here is a link to our discord", "https://discord.gg/ehTXFJj");
client.on('message', message => {
    if (tL(message.content) === '.extra') {
        message.channel.sendEmbed(embed);

    }
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
