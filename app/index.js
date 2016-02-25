var express = require('express');
var app = express();
var _ = require('lodash');
var parseQuery = require('./parse_query.js');
var bot = require('./bot_config');

app.get('/', function (req, res) {
	var people = parseQuery.getPeople(req.query.text);
	_.each(people, function(person){
		person = person.slice(1, person.length);
		console.log(person);
		bot.postMessageToUser(person, 'Taylor has your input in ten minutes');
	});
});

app.listen(4242, function () {
  console.log('Example app listening on port 4242!');
});