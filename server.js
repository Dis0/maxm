var http = require("http");
var url = require("url");
var port = process.env.PORT || 3000;

function start(route, handle) {
  http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(handle, pathname, response);
  }).listen(port);
  console.log("Server has started.");
}

exports.start = start;
