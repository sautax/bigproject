const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);











/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');
// Create an instance of a Discord client
const client = new Discord.Client();
// The token of your bot - https://discordapp.com/developers/applications/me
const token = process.env.TOKEN;
// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

let total = 0
let m = 0




// Create an event listener for messages
client.on('message', message => {
  // If the message is calling the bot
  if (message.content.substr(0, 4) === '!bot') {
    if (message.guild.name === "Developper colony" && message.channel.name === 'demandes-rôles') {
      if (message.content.substr(5, 1) === 'r') {
        //roles
        if (message.content.includes('stw')) {
          if (message.member.roles.has('460390051663314955')) {
            message.reply("impossible ! vous avez déjà ce rôle !")
          } else {
            message.member.addRole('460390051663314955')
            message.reply('Rôle attribué !')
          }

        }
        //460390690128527371
        if (message.content.includes('fnbr')) {
          if (message.member.roles.has('460390690128527371')) {
            message.reply("impossible ! vous avez déjà ce rôle !")
          } else {
            message.member.addRole('460390690128527371')
            message.reply('Rôle attribué !')
          }

        }
        if (message.content.includes('pc')) {
          if (message.member.roles.has('460517968867098624')) {
            message.reply("impossible ! vous avez déjà ce rôle !")
          } else {
            message.member.addRole('460517968867098624')
            message.reply('Rôle attribué !')
          }

        }
        if (message.content.includes('xbox')) {
          if (message.member.roles.has('460518331120746498')) {
            message.reply("impossible ! vous avez déjà ce rôle !")
          } else {
            message.member.addRole('460518331120746498')
            message.reply('Rôle attribué !')
          }

        }
        if (message.content.includes('playstation')) {
          if (message.member.roles.has('460518227680952320')) {
            message.reply("impossible ! vous avez déjà ce rôle !")
          } else {
            message.member.addRole('460518227680952320')
            message.reply('Rôle attribué !')
          }

        }
        if (message.content.includes('switch')) {
          if (message.member.roles.has('460519045033230337')) {
            message.reply("impossible ! vous avez déjà ce rôle !")
          } else {
            message.member.addRole('460519045033230337')
            message.reply('Rôle attribué !')
          }

        }
        if (message.content.includes('prog')) {
          if (message.member.roles.has('460509017089769473')) {
            message.reply("impossible ! vous avez déjà ce rôle !")
          } else {
            message.member.addRole('460509017089769473')
            message.reply('Rôle attribué !')
          }

        }


















      }

    }


    if (message.channel.name.includes('bot')) {
      if (message.content.substr(5, 4) === 'ping') {
        message.channel.send(new Date().getTime() - message.createdTimestamp + " ms")

      }
      if (message.content.substr(5, 4) === 'stat') {
        let temp = total/m
        message.channel.send("temps de répose moyen = " + parseInt(temp,10) + "ms")

      }



    }
  }
  let ping = new Date().getTime() - message.createdTimestamp
  total += ping
  m += 1
});



// Log our bot in
client.login(token);