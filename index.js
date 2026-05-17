const { Client, MessageEmbed, WebEmbed } = require('discord.js-selfbot-v13');
const client = new Client();
require('dotenv').config()

let disboard_bot = "302050872383242240"
let fibo_bot = "735147814878969968"
let channelId = "1487908618622730430"


client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
  const channel = client.channels.cache.get(channelId);
  channel.send("online!");
})

client.on("message", async (ctx) => {
    if (ctx.channelId === channelId) {
        if (ctx.author.id === fibo_bot) {
                //const channel = client.channels.cache.get(ctx.channelId);
                //channel.sendSlash(disboard_bot, "bump");

            if (ctx.content.startsWith("<@1289995374953762858>")) {
                const channel = client.channels.cache.get(ctx.channelId);
                channel.sendSlash(disboard_bot, "bump");
                console.log("bump");
            }
        }
    }
})

client.login(process.env.TOKEN);