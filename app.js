var express = require('express');
var app = express();

app.use('/', function (req, res, next) {
  res.end('server is on '+ process.env.PORT);
});

app.listen(process.env.PORT || 8080)

module.exports = app;