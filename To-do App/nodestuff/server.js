const http = require('http');

const port = process.env.PORT || 3000;
const server = http.createServer();


const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.addListener('hola',()=>{console.log("Hi there!")});

emitter.emit('hola');