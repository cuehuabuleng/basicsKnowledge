// setImmediate(() => {
//     console.log('setImmediate1');
    
//     setTimeout(() => { console.log('setTimeout1') }, 0);
// });

// Promise.resolve().then(res => { console.log('then'); })

// setTimeout(() => {
//     process.nextTick(() => { console.log('nextTick'); });
//     console.log('setTimeout2');

//     setImmediate(() => { console.log('setImmediate2'); });
// }, 0);


console.log(globalThis)