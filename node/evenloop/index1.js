// const fs = require('fs');

// setTimeout(function(){
//     console.log('ff');
// },0);

// function func(cb) {
//     try {
//         fs.readFile('xxx.js',cb);
//     } catch (error) {
//         throw new Error(error)
//     }
// }

// func( () => {
//     console.log('a');
// })
// setTimeout(function timeout () {
//     console.log('timeout');
// },0);

// setImmediate(function immediate () {
//   console.log('immediate');
// });
const hostname = '127.0.0.1';
const port = 3000;
const http = require('http')
const server = http.createServer((req, res) => {
  testEventLoop()
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function testEventLoop() {
  console.log('=============')

  // Timer
  setTimeout(() => {
    console.log('Timer phase') 
    process.nextTick(() => {
      console.log('Timer phase - nextTick')
    })
    Promise.resolve().then(() => {
      console.log('Timer phase - promise')
    })
  });

  // Check
  setImmediate(() => {
    console.log('Check phase')
    process.nextTick(() => {
      console.log('Check phase - nextTick')
    })
    Promise.resolve().then(() => {
      console.log('Check phase - promise')
    })
  })

  // Poll
  console.log('Poll phase');
  process.nextTick(() => {
    console.log('Poll phase - nextTick')
  })
  Promise.resolve().then(() => {
    console.log('Poll phase - promise')
  })
}

/**
 =============
 Poll phase
 Poll phase - nextTick
 Poll phase - promise

 Timer phase
 Timer phase - nextTick
 Timer phase - promise
 
 Check phase
 Check phase - nextTick
 Check phase - promise
 


 timer
 microQueue
console.log('Timer phase - nextTick')
console.log('Timer phase - promise')


 macroQueue
 setTimeout  console.log('Timer phase') 

 seImedate
 microQueue
console.log('Check phase - nextTick')
Check phase - promise

 macroQueue
 console.log('Check phase')


 poll
 mic
 console.log('Poll phase - nextTick')
 console.log('Poll phase - promise')

 mac
 console.log(`Server running at http://${hostname}:${port}/`);
 */