# 什么是闭包：
 闭包是有权访问另一个函数作用域的变量的函数。简单的说，Javascript允许使用内部函数---即函数定义和函数表达式位于另一个函数的函数体内。而且，这些内部函数可以访问它们所在的外部函数中声明的所有局部变量、参数和声明的其他内部函数。当其中一个这样的内部函数在包含它们的外部函数之外被调用时，就会形成闭包。

 ## 举个例子
最常见的闭包一般产生在函数嵌套函数里面（但是并不只是只有这种情况）：
 ```javascript
    function foo(){
    var local = 1
    function bar(){
        local++
        return local
    }
    return bar
    }

    var func = foo()
    func()
 ```
 

>local 变量和 bar 函数就组成了一个闭包（Closure）。

**是因为需要局部变量，所以才把 local 放在一个函数里，如果不把 local 放在一个函数里，local 就是一个全局变量了，达不到使用闭包的目的——_隐藏变量_。**

:::warning
这里需要明白的是，闭包不一定需要函数嵌套函数，上面代码这样做只是为了造出一个局部变量，跟闭包无关。
:::



# 闭包的作用：
    1.使得外部函数的私有变量不会被清除，一直存在内存中。
    2.间接访问一个变量，即隐藏变量，只提供API给外部使用，避免变量全局污染。
    3.定时器



# 闭包会造成内存泄漏吗
**答案是不会！**

>js高级教程中有提到：由于IE9 之前的版本对JScript 对象和COM 对象使用不同的垃圾收集。因此闭包在IE 的这些版本中会导致一些特殊的问题。具体来说，如果闭包的作用域链中保存着一个HTML 元素，那么就意味着该元素将无法被销毁。

例子：
```javascript
function assignHandler(){
    var element = document.getElementById("someElement");
    element.onclick = function(){
        alert(element.id);
    };
}
```
&emsp;&emsp;以上代码创建了一个作为element 元素事件处理程序的闭包，而这个闭包则又创建了一个循环引用（事件将在第13 章讨论）。由于匿名函数保存了一个对assignHandler()的活动对象的引用，因此就会导致无法减少element 的引用数。只要匿名函数存在，element 的引用数至少也是1，因此它所占用的内存就永远不会被回收。

&emsp;&emsp;解决办法就是把element.id 的一个副本保存在一个变量中，从而消除闭包中该变量的循环引用同时将element变量设为null。如下：
```javascript
function assignHandler(){
    var element = document.getElementById("someElement");
    var id = element.id;
    element.onclick = function(){
        alert(id);
    };
    element = null;
}
```
**总结：闭包并不会引起内存泄漏，只是由于IE9之前的版本对JScript对象和COM对象使用不同的垃圾收集，从而导致内存无法进行回收，这是IE的问题，所以闭包和内存泄漏没半毛钱关系。**

## 使用闭包需要注意的点
1. 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
2. 闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。

# 闭包中的变量：
## 例子1：

```javascript
    // 函数作为值返回
        function create () {
            let a = 100;
            return function () {
                console.log(a)
            }
        }
        let fn = create();
        let a = 200;
        fn();  //100

    // 函数作为参数被传递
        function print () {
            let a = 200;
            fn()
        }
        let a = 100;
        function fn () {
            console.log(a)
        }
        print(a) //100
```


_**闭包中的变量查找是在函数定义的地方，向上上级作用域查找，不是在函数执行的地方。**_
    

 ## 例子2：

```javascript
     function fn(){
            var i = 1;
            return function(){
                return i ++
            }
        }
        console.log(fn()) //ƒ (){return i ++}
        console.log(fn()())  //1
        console.log(fn()()) //1
        // 上面每执行一次，就会形成一个新的环境，这个环境就是闭包环境。所以就会每次都会输出=>  1



        // 声明一个全局变量，来接受父函数执行后返回的匿名函数，此时test也就是一个函数了。

        // 上面讲将fn函数每执行一次，都会形成一个新的环境，这个新的环境被全局变量test保存下来，
        // test和子函数建立引用关系，子函数和父函数中的局部变量有事存在着引用关系
        // 而上面说两个以上存在引用关系的对象，只要有一个是全局的，那么其他的就不会被回收。
        var test = fn();
        console.log(test) //ƒ (){return i ++}
        console.log(test()) //1
        console.log(test()) //2


        //因为fn每执行一次就会生成一个新的环境， 这个环境就成为闭包。所以这个test2对上面的那个test没有任何影响。
        var test2 = fn();
        console.log(test2)  //ƒ (){return i ++}
        console.log(test2())  //1
        console.log(test2())   //2
```


## 例子3：

```javascript
        let a = 0,
            b = 0;
            function A(a){
                A = function (b) {
                    console.log('a + b',a + b ++)
                }
                console.log('a', a++)
            }
            A(1)  //1    
            // 第一次执行A函数的时候，向里面传进了一个参数a = 1，然后A函数里面代码就开始执行， 首先会将A 等于一个函数 fucntion(){...}， 然后就console.log(a)输出  ‘a’ 1

            A(2)  //4

            // 第二次执行A函数的时候，此时的A已经是指向了另外的一个地址了，不再是原来的那个A函数了，然后此时这A函数就会接受一个b=2的参数，然后执行里面的代码 'console.log("a+b",a+b++)'，这时候的a已经是等于2了，因为上次传进来的a是1，然后上次执行完之后，就a++，所以，a=2.输出4.其实主要就是上次执行完A函数之后，又将A重新赋值指向另外一个函数，其实这里的A是全局的变量，所有，执行完上次的函数A之后，那个传进来的a并不会被销毁，因为这时候，已经产生了一个闭包，就是第二个函数，这个函数里面还引用到了a，所以这时候的a的值是上一次函数执行完之后的值。

```