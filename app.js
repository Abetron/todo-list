
// SETUP
var express = require('express');
var app = express();
PORT = 32147;

app.get('/', function(req, res) {
  res.send("server 1 up and running.");
})


// LISTENER
app.listen(PORT, function() {
  console.log('Express started on http://64.227.1.154:' + PORT + '; press Ctrl-C to terminate.')
});