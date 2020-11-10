async/await:
    await后面接一个会return new promise的函数并执行它
    await只能放在async函数里


async的作用 ：函数通过async关键字的包裹， 返回一个Promise对象,
             1、如果函数没有返回值，那就返回 ： 它会返回 Promise.resolve(undefined)。
             2、如果函数返回的是普通数据，就会被包装成一个resolve的Promise
             3、或者直接在函数里面返回一个Promise对象

              Promise 的特点——无等待，所以在没有 await 的情况下执行 async 函数，它会立即执行，返回一个 Promise 对象，并且，绝不会阻塞后面的语句。这和普通返回 Promise 对象的函数并无二致。


        ```javascript
        async function testAsync() {
            return "hello async";
        }

        const result = testAsync();
        console.log(result);  //Promise { 'hello async' }
        ```


        ```javascript
        function getSomething() {
            return "something";
        }

        async function testAsync() {
            return Promise.resolve("hello async");
        }

        async function test() {
            const v1 = await getSomething();
            const v2 = await testAsync();
            console.log(v1, v2);
        }

        test();  //something hello async
        ```

await的作用：使用await等待一个表达式，表达是的计算结果是一个promise对象或者是其他值。async函数返回的是一个Promise对象，所以使用await来等待async的
            返回值，所以说是await在等待async函数，但是需要清楚的是，它不仅仅是可以用来等待一个Promise对象，还可以是其他的表达式，后面可以接普通函数或者直接接值。

            await后面的表达式有两种情况：
            2、表达式返回的不是一个Promise对象：那么await表达式的运算结果就是它等到的东西。
            1、如果它等到的是一个 Promise 对象，await 就忙起来了，它会阻塞后面的代码，等着 Promise 对象 resolve，然后得到 resolve 的值，作为 
               await 表达式的运算结果。

            需要说明的是，await关键字会对代码造成阻塞，因为它需要等待当前代码返回结果，所以这就是它为什么需要在async函数中使用的原因，async是一个异步函数，异步函数的调用不会产生阻塞，它内部的所有阻塞都会封装在一个Promise对象中异步执行。

async/await 的优势在于处理 then 链：
            单一的 Promise 链并不能发现 async/await 的优势，但是，如果需要处理由多个 Promise 组成的 then 链且需要传递参数的时候的时候，就可以发现
            async/await使用起来更加简洁，使代码看起来更同步。


执行顺序问题：
            await后紧跟一个Promise

            1、 await后如果是接一个promise，那么如果promise未被resolved，那么后续代码（如下的：console.log('async1 end')）将不会被执行， 后续代码（console.log('async1 end')）可以简单理解为是.then的回调事件， 因为async/await本质是promise的语法糖。
            2、await后如果是接一个promise，那在执行该promise时如果遇到.then（如果promise是resolved的话），会将该.then的回调事件推进到微任务队列中， 不会把await后续的代码（指await当前行以下的全部代码）推入到微任务中，然后会直接跳出当前的函数。await后续的代码会在所有promise执行完毕（包括promise的then回调事件）后执行。

            ```javascript
            async function async1() {
                await new Promise(resolve => {
                    console.log(123);
                    // 如果不加上resolve(), 后续代码console.log('async1 end')将不会被执行, console.log('async1 end')可以简单理解为是.then的回调事件
                    resolve()
                })
                console.log('async1 end')
            }
            
            Promise.resolve().then(() => {
                console.log(666)
            })
            async1()

            // 输出
            运行结果: 
                123
                666
                'async1 end'
            ```