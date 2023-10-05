const http = require('http');

const server = http.createServer(function(request, response){
  // console.log(typeof(response));
  // console.log(request.url);
  if(request.url === "/"){
    let main = `<html><head></head><body><h1>  main<a href= "http://localhost:2070/sub">go to sub</a> </h1></body></html>`
    response.writeHead(200, {"Content-Type" : "text/html"})
    response.end(main);
  } 
  if (request.url === "/sub"){
    let sub = `<html><head></head><body><h1> sub </h1><a href= "http://localhost:2070">go to main</a></body></html>`
    response.writeHead(200, {"Content-Type" : "text/html"})
    response.end(sub);
  }
});

server.listen(2070);
