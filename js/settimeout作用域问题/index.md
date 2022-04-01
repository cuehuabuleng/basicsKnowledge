关于setTimeout的作用域和this的指向问题
    setTimeout方法是挂在window对象下的。 因为它是weindow对象，因此超时调用的代码都是在全局作用域中执行的（全局作用域中，非严格模式this指向window对象，严格模式this指向undefined）。

    结论就是：setTimeout中所执行的函数中的this作用域是指向window。（有函数就会有作用域）

    在setTimeout中，会遇到两个this，其中的一个是setTimeout调用环境中的this， 另外一个就是延迟执行函数中的this。

            其中的第一个this是需要根据上下文环境来确定的，默认为windows； 第二个this就是指向window。

        ```javascript
            function Foo() {
            this.value = 42;
            this.method = function() {
                // this 指向全局对象
                alert(this)   // 输出window  第二个this
                alert(this.value); // 输出：undefined   第二个this
            };
            setTimeout(this.method, 500);  // this指向Foo的实例对象  第一个this
            }
            new Foo();
        ````


最终会有一些结论：
    一、setTimeout中的延迟执行代码中的this永远指向window
    二、setTimeout(this.method, time), 这种形式中的this，就是第一个this， 是根据上下文来判断的，默认为全局作用域，但是不一定总是处于全局作用域下，具体问题具体分析。
    三、setTimeout（匿名函数，time）这种形式下，匿名函数中的 >>>变量<<< 也需要根据上下文来判断， 具体问题具体分析。


// ##  https://www.cnblogs.com/hutaoer/p/3423782.html