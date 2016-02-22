var express = require('express');
var app = express();
var parseQuery = require('./parse_query.js');

app.get('/', function (req, res) {
	var people = parseQuery.getPeople(req.query.text).toString();


  res.send('Gonna round up ' + people.replace(/,/g, ' and '));
});

app.listen(4242, function () {
  console.log('Example app listening on port 4242!');
});