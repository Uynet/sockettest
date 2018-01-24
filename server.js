let fs = require('fs');
let http = require('http');
let server = http.createServer();

server.on('request',(req,res)=>{
  let stream = fs.createReadStream('index.html');
  res.writeHead(200,{'Content-Type' : 'text/html'});
  let out = fs.readFileSync("./index.html" , "utf-8");
  res.end(out);
}).listen(8080);

let io = require('socket.io').listen(server);

let popo = ()=>{
  console.log("unko");
}

io.sockets.on("connection",(socket)=>{
  socket.on("connected",(str)=>{
    console.log("ぽ" + str);
  })
})

