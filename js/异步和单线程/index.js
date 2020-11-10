// console.log(1)

// setTimeout(() => {
//     console.log(2)
// }, 10)

// console.log(3)
// setTimeout(() => {
//     console.log(4)
// }, 0)

// console.log(5)

console.log('script start')

async function async1(){
    await async2();
    console.log('async1 end')
}

async function async2(){
    console.log('async2 en')
}
async1();

setTimeout(() => {
    console.log('setTimeout')
}, 0)

new Promise((resolve) => {
    console.log('Promise');
    resolve();
}).then(() => {
    console.log('Promise1')
}).then(() => {
    console.log('Promise2')
})

console.log('script end')