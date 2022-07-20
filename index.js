const { Client } = require('discord.js-selfbot-v13');
const { RichPresence, Util } = require('discord.js-selfbot-rpc');


const client = new Client({
  checkUpdate: false,
});

client.on('ready', async() => { 
    
    const applicationId = ''; // Your Application ID
    const LargeImage = await Util.getAssets(applicationId, ''); // Large Image Name
    const SmallImage = await Util.getAssets(applicationId, ''); // Small Image Name


    const presence = new RichPresence()
    .setApplicationId(applicationId)
    .setStatus('dnd') // online, idle, dnd
    .setType('PLAYING') // PLAYING, STREAMING, LISTENING, WATCHING
    .setName('Chrome')
    .setDetails('View Homepage')
    .setState('Searching anime...')
    .setAssetsLargeImage(LargeImage.id)
    .setAssetsLargeText('Chrome')
    .setAssetsSmallImage(SmallImage.id)
    .setAssetsSmallText('Google')
    .setTimestamp();

    client.user.setPresence(presence.toData());
    
    console.log(`[RPC] - Running...`);
    console.log(`[LOGIN] - ${client.user.tag}!`);
});

client.login('token');
