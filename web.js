// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('*', function(req, res, next) {
  if (req.headers.host.slice(0, 3) != 'www') {
    res.redirect('http://www.' + req.headers.host + req.url, 301);
  } else {
    next();
  }
});

app.get('/', function(req, res) {
  res.send('Hello World!');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});