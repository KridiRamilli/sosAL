const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io')

const publicPath = path.join(__dirname,'../public')
const port = process.env.PORT || 3000
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

const {generateMessage} = require('./utils/messages.js')

app.use(express.static(publicPath));
server.listen(port, ()=> {
  console.log(`Server is listening on port ${port}`)
});

io.on('connection', (socket) =>{
  socket.emit('newMessage', generateMessage('Kridi','This is our first message'))
  socket.broadcast.emit('newMessage', generateMessage('Kridi', 'New user joined'))
  socket.on('createMessage', (message) => {
    io.emit('newMessage', generateMessage(message.from, message.message))
  })
  socket.on('disconnect', () => {
    console.log('disconnected')
  })
})
