const { Client, MessageEmbed, WebEmbed } = require('discord.js-selfbot-v13');
const client = new Client();
require('dotenv').config()


let bot = "735147814878969968"
let channel = "1487908618622730430"



client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

client.on("message", async (ctx) => {
    if (ctx.channelId === channel) {
        if (ctx.author.id === bot) {
            if (ctx.content === MessageEmbed) {
                const channel = client.channels.cache.get(ctx.channelId);
                channel.send("dzialam v1");
            }

            if (ctx.content === WebEmbed) {
                const channel = client.channels.cache.get(ctx.channelId);
                channel.send("dzialam v2");
            }

            const channel = client.channels.cache.get(ctx.channelId);
            channel.send("kk")
            
        }
    }
})

client.login(process.env.TOKEN);