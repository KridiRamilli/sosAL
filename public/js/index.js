let socket = io();

socket.on('connect', () => {
  console.log('Connected to server');
});
socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage',message);
  let li = $('<li></li>');
  li.text(`${message.from}: ${message.message}`);

  $('#messages').append(li)

})

/*socket.emit('createMessage', {
  from: 'Admin',
  text: 'Testing'
}, function (data){
  console.log('I recieved the ' + data)
})
*/
$('#message-form').on('submit', function(e) {
  e.preventDefault();
  let text = $('#messageText').val();
  socket.emit('createMessage', {
    from: 'User',
    message: text
  }, function(data){
    console.log('Recieved',data);
  })

})
