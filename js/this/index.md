
this的作用场景：
1、作为普通函数调用
2、call、apply和bin调用
3、作为对象方法被调用
4、在calss方法中被调用
5、箭头函数 --->会找他的上一级的作用域的this来决定。

this取什么值是在函数执行的时候决定的不是在函数定义的时候决定的。

一、什么是this
    this指的是执行上下文。this一般存在于函数中，代表着函数得得执行上下文。只有在函数执行后this才会进行绑定。

    this相当与一个指针，一般是指向一个对象。

二、this的指向问题。
    1、默认执行：this指向window，在严格模式下，this指向undefined 

    ```javascript
    function fn(){
            "use strict";
            console.log(this);
        }
        fn();
    // 这个时候在严格模式下，指向的是undefined,去掉严格模式，指向window
    ```

    2、隐式执行（通过对象执行）：通过上下文对象执行。


    3、 es6里面的calss是默认有个user strict的  所以在外部调用的函数的this会指向undfined

    ```javascript
        var a = 5;
        class A{
            a = 4;
            fn(){
                console.log(this)  //undefined   
            }
        }

        let b = new A().fn  
        b();

// 这样写的话，上面的this指向的就是calss A 
        let b = new A()
        b.fn()
    ```

    https://www.cnblogs.com/jiuxia/p/11488140.html