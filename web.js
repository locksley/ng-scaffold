var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var fs = require('fs');

var app = express();

if (process.env.NODE_ENV === "production") {
  var newrelic = require('newrelic');

  var prerender = require('prerender-node').set('prerenderToken', process.env.PRERENDER_TOKEN)
  app.use(prerender);
}

// Find the index.html in /dist
var index;
var files = fs.readdirSync("dist");
for (var i = 0; i < files.length; i++) {
  if (files[i].match(/index\..+\.html/)) {
    index = files[i]
    break
  }
};

app.use(morgan("combined"));

app.get("/ping", function(req, res) {
  res.json({
    msg: "pong"
  }, 200)
})

// Static Asset Server; 1 to 1 with files in /dist
app.use(gzippo.staticGzip(__dirname + "/dist"));

// Dynamic routes
app.use(function(req, res) {
  res.sendfile(__dirname + '/dist/' + index);
});

app.listen(process.env.PORT || 8000);
