const EventEmitter = require('node:events');
const myEmitter = new EventEmitter();

myEmitter.on('waterfull', () => {
  console.log("please Turn off the Motor");
  setTimeout(()=>{
    console.log("Motor still on please Turn off it");
  },4000);
});
myEmitter.emit('waterfull')
console.log("checking speed");