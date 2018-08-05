//on chat
client.on('chat', (channel, userstate, message, self) => {
  //channel is which channel it comes from. Not very usable if you are in one channel only.
  //Userstate is an object which contains a lot of information, if the user who wrote is a subscriber, what emotes he used etc.
  //message is the message itself.
  //self is your bot.

  if (self) return; //If your bot wrote something, then ignore it because you dont want to listen to your own messages

  if (message.toLowerCase().includes('Botmin')) {
    //using string.includes is case-sensitive, so it is better to just make it lowercase
    client.say('channel', `@${userstate.username} Henlo (OvO")`);
  }
  if (message.toLowerCase().includes('bad word')) {
    client.ban('channel', userstate.username, 'He wrote a bad word'); //this is a promise so you can add .then and .catch if you want
  }
});

// https://docs.tmijs.org/v1.2.1/Commands.html

//Maybe you want to advertise your youtube or facebook/twitter
setInterval(() => {
  client.say(
    'channel',
    'Heya, you should totally see my youtube. Or do you like what you se? Well you know what, subscribe then!'
  );
}, 300000); //Every 5 minute, your bot advertise your channel.
