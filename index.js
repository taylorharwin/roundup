var express = require('express');
var app = express();

app.get('/', function (req, res) {
	console.log(req.query.text);
  res.send('Gonna round up' + req.query.text + 'for a conversation');
});

app.listen(4242, function () {
  console.log('Example app listening on port 4242!');
});