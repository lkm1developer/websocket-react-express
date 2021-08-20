const app = require('express')();
const server = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
  });

  io.on("connection", (socket) => {
    socket.broadcast.emit("msg", "Message from websocket");
  });
  setInterval(() => {
    io.emit('msg', `Message from websocket ${(new Date()).toString()}`);
}, 100);
server.listen(3005,()=>console.log('server started'));