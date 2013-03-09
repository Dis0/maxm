var http = require("http"),
    url = require("url"),
    port = process.env.PORT || 3000;

function start(route, handle) {
  http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }).listen(port);
  console.log("Server has started.");
}

exports.start = start;
