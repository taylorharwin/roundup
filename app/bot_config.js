var SlackBot = require('slackbots');
 
// create a bot 
var bot = new SlackBot({
    token: 'xoxb-22438458181-8gbDg17qS9e4kP8EhrdRkFGK', // Add a bot https://my.slack.com/services/new/bot and put the token  
    name: 'Roundup'
});
 
module.exports = bot;