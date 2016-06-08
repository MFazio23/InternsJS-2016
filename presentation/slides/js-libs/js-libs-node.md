#node.js
<img src="\img\nodejs-logo.svg" width="200" />
```
var http = require('http');

var finalHandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("./");

var server = http.createServer(function(req, res) {
    var done = finalHandler(req, res);
    serve(req, res, done);
});

var port = process.env.PORT || 8023;
server.listen(port);
```

Note:
+ node.js is server-side JavaScript
    + Single-threaded
    + Non-blocking I/O calls
    + Allows lots of concurrent connections without thread context switching costs
+ Uses Google's V8 engine
    + compiles JS source code into native machine code
    + Also used in Chrome
+ Includes _npm_
    + Package management registry