let app = require("http").createServer(handler),
    io = require("socket.io").listen(app),
    fs = require("fs");
    app.listen(8080);
function handler(req,res){
  fs.readFile(__dirname + "/index.html",(err,data)=>{
    if(err){
      res.writeHead(500);
      return res.end("えらーだよ");
    }
    res.writeHead(200);
    res.write(data);
    res.end();
  })
};


io.sockets.on("connection",(socket)=>{
socket.on("emit",(data)=>{
  console.log(data);
  });
});
