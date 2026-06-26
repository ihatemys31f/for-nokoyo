const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
require('dotenv').config()

let disboard_bot = "302050872383242240"
let fibo_bot = "735147814878969968"
let channelId = "1487908618622730430"
let tester = "615855594053828628"


client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
  const channel = client.channels.cache.get(channelId);
  channel.send("online!");
  StartUptimeKumaHeartBeat();
})

function StartUptimeKumaHeartBeat() {
    const pushURL = "https://uptime.wodzyn.pl/api/push/BvpuoKzyIlvqZ3i8JvNumJNvQm5Ukzwi?status=up&msg=OK&ping=";
    const interval = 60;

    const push = async () => {
        try {
            await fetch(pushURL);
            console.log("Uptime Kuma push: OK");
        } catch (err) {
            console.error("Uptime Kuma push failed:", err);
        }
    };

    push();
    setInterval(push, interval * 1000);
}

client.on("message", async (ctx) => {
    if (ctx.channelId === channelId) {
        if (ctx.author.id === fibo_bot) {
                //const channel = client.channels.cache.get(ctx.channelId);
                //channel.sendSlash(disboard_bot, "bump");

            if (ctx.content.startsWith(`<@${process.env.CLIENTID}>`)) {
                const channel = client.channels.cache.get(ctx.channelId);
                channel.sendSlash(disboard_bot, "bump");
                console.log("bump");
            }
        }
        if (ctx.author.id === tester) {
            if (ctx.content === 'krystyna test') {
                console.log("test");
                const channel = client.channels.cache.get(ctx.channelId);
                channel.send('working');
            }
            if (ctx.content === 'krystyna bump') {
                console.log("manual bump");
                const channel = client.channels.cache.get(ctx.channelId);
                channel.sendSlash(disboard_bot, "bump");
            }
        }
    }
})

client.login(process.env.TOKEN);