const tmi = require('tmi.js');
const options = require('./options'); // Options File

// Connect to Twitch
const client = new tmi.client(options);
client.connect();
