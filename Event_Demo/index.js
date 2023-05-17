const event = require('events')
const fs = require('fs')

const eventEmitter = new event.EventEmitter();

eventEmitter.addListener('updateResult', ()=>{
    console.log('when updateResult event gets invoke call this function')
})

fs.readFile('test.tst', 'utf8',(err,data)=>{
    eventEmitter.emit('updateResult')
})