const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io')

const publicPath = path.join(__dirname,'../public')
const port = process.env.PORT || 3000
let app = express();
let server = http.createServer(app);
let io = socketIO(server);
app.use(express.static(publicPath));
server.listen(port, ()=> {
  console.log(`Server is listening on port ${port}`)
});

io.on('connection', (socket) =>{
  socket.on('disconnect', () =>
  {
    console.log('disconnected')
  })
})
