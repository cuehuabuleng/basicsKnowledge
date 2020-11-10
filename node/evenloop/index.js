// 当时在node环境下 有nextTick的时候，nextTick会在await后面的的代码之前执行
// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end')
// }
// async function async2() {
//     console.log('async2');
// }
// console.log('script start');
// setTimeout(() => {
//     console.log('setTimeout0')
// }, 0)
// setTimeout(() => {
//     console.log('setTimeout3')
// }, 3)
// setImmediate(() => {
//     console.log('setImmediate')
// })
// process.nextTick(() => {
//     console.log('nextTick')
// })
// async1();
// new Promise((resolve) => {
//     console.log('promise1')
//     resolve();
//     console.log('promise2')
// }).then(() => {
//     console.log('promise3')
// })

// console.log('script end')


console.log('start')
setTimeout(function(){
    console.log(2)
}, 10);
setImmediate(function(){
    console.log(1)
});
new Promise(function(resolve){
    console.log(3)
    resolve()
    console.log(4)
}).then(function(){
    console.log(5)
});
console.log(6)
process.nextTick(function(){
    console.log(7)
})
console.log(8)

/**
start
3
4
6
8
7
5
1
2


macroQueue
settimeout console.log(2)
setImediate console.log(1)

microQueue
then console.log(5)
nextTick console.log(7)

 */









// async function testSometing() {
//     console.log("执行testSometing");
//     return "testSometing";
// }

// async function testAsync() {
//     console.log("执行testAsync");
//     return Promise.resolve("hello async");
// }

// async function test() {
//     console.log("test start...");
//     const v1 = await testSometing();
//     console.log(v1);
//     const v2 = await testAsync();
//     console.log(v2);
//     console.log(v1, v2);
// }

// test();

// var promise = new Promise((resolve)=> { console.log("promise start.."); resolve("promise");});//3
// promise.then((val)=> console.log(val));

// console.log("test end...")





// async function async1() {
//     console.log('async1 start')
//     await async2()
//     console.log('async1 end')
// }
// async function async2() {
//     console.log('async2')
// }
// console.log('script start')
// setTimeout(function () {
//     console.log('setTimeout')
// }, 0)
// async1()
// new Promise(resolve => {
//     console.log('promise0')
//     resolve()
// }).then(() => {
//     console.log('promise1')
// }).then(() => {
//     console.log('promise2')
// })
// console.log('script end')
