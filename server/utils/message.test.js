let expect = require('expect');
let {generateMessage} = require('./messages.js');

describe ('generateMessage', () => {
  it('it should generate a message object', () => {
    //Decalere variables and store result
    let from = 'Kridi';
    let message = 'Test message';
    let result = generateMessage(from, message);
    //Make assertions
    expect(typeof(result.createdAt)).toBe('number');
    expect(result).toInclude({
      from,
      message
    })

  })
})
