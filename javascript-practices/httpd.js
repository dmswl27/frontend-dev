var port = 7070;
var http = require("http");
http.createServer(function(req, resp){
    resp.writeHead(200, {
        "Content-Type": "text/html"
    });
    
    resp.end("<h1>hello world</h1>");
      
}).listen(port, function(){
    console.log("Listening on:" + port);
}); 