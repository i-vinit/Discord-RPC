# DISCORD RPC
### Setup
1. Update `index.js` file.
```js
const { Client } = require('discord.js-selfbot-v13');
const { RichPresence, Util } = require('discord.js-selfbot-rpc');


const client = new Client({
  checkUpdate: false,
});

client.on('ready', async() => { 
    
    const applicationID = ''; // Your Application ID
    const LargeImage = await Util.getAssets(applicationID, ''); // Large Image Name
    const SmallImage = await Util.getAssets(applicationID, ''); // Small Image Name


    const presence = new RichPresence()
    .setApplicationId(applicationID)
    .setStatus('idle') // online, idle, dnd
    .setType('PLAYING') // PLAYING, STREAMING, LISTENING, WATCHING
    .setName('Chrome')
    .setDetails('Homepage')
    .setState('Searching...')
    .setAssetsLargeImage(LargeImage.id)
    .setAssetsLargeText('Chrome')
    .setAssetsSmallImage(SmallImage.id)
    .setAssetsSmallText('Google')
    .setTimestamp();

    client.user.setPresence(presence.toData());
    
    console.log(`[RPC] - Running...`);
    console.log(`[LOGIN] - ${client.user.tag}!`);
});

client.login('token'); // User Token
```

2. Install Modules

```js
npm i discord.js-selfbot-v13
```
```js
npm i discord.js-selfbot-rpc
```

3. Run file

```js
node index.js
```

