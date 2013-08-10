var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs'),
    util = require('util');

app.get('/', function(request, response) {
//  response.send('Hello World3!');

response.writeHead(404, {'content-type': 'text/html'});
        var rs = fs.createReadStream('index.html');
        util.pump(rs, response);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
