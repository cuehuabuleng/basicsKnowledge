
# this的作用场景：
1. **作为普通函数调用**
2. **call、apply和bin调用**
3. **作为对象方法被调用**
4. **在calss方法中被调用**
5. **箭头函数 --->会找他的上一级的作用域的this来决定。**



## this取什么值是在函数执行的时候决定的不是在函数定义的时候决定的。


# 一、什么是this
1. this指的是执行上下文。this一般存在于函数中，代表着函数得得执行上下文。只有在函数执行后this才会进行绑定。
2. this相当与一个指针，一般是指向一个对象。


# 一、五种this的绑定

## 默认this绑定
```javascript
function fn1() {
    let fn2 = function () {
        console.log(this); //window
        fn3();
    };
    console.log(this); //window
    fn2();
};

function fn3() {
    console.log(this); //window
};

fn1();
```
上面的例子中由于fn1在调用的时候，前面没有指向任何的对象，在这种情况下，this默认指向全局的window。

但是在严格模式下这样的this指向undefined。如下面例子。
```javascript
function fn() {
    console.log(this); //window
    console.log(this.name);
};

function fn1() {
    "use strict";
    console.log(this); //undefined
    console.log(this.name);
};

var name = '听风是风';

fn(); 
fn1() //TypeError: Cannot read property 'name' of undefined
```

但是如果在严格模式下的函数中调用非严格模式的函数，并不会影响this的指向:
```javascript
var name = '听风是风';
function fn() {
    console.log(this); //window
    console.log(this.name); //听风是风
};

(function () {
    "use strict";
    fn();
}());

```

## 二、this隐式绑定
### 1、隐式绑定
（1）、如果函数在调用的时候，<em>前面存在着调用他的对象，那么this就会隐式绑定到这个对象上。</em>
```javascript
function fn() {
    console.log(this.name);
};
let obj = {
    name: '听风是风',
    func: fn
};
obj.func() //听风是风
```
（2）、如果函数在调用的时候，前面有多个调用对象，this会指向距离调用自己最近的对象。
```javascript
function fn() {
    console.log(this.name);
};
let obj = {
    name: '行星飞行',
    func: fn,
};
let obj1 = {
    name: '听风是风',
    o: obj
};
obj1.o.func() //行星飞行
```
（3）、那如果我们将obj对象的name属性注释掉，现在输出什么呢？
```javascript
function fn() {
    console.log(this.name);
};
let obj = {
    func: fn,
};
let obj1 = {
    name: '听风是风',
    o: obj
};
obj1.o.func() //undefined
//这里输出undefined是因为obj虽然是obj1的属性，但是他两原型链式不一样的，并不是父子关系，由于obj未提供name属性所以是输出undefined
```
**这里讲一下作用域与原型链的区别**

1. 当访问一个变量时，解析器首先会在当前作用域查找标识符，如果没有找到就会去父作用域查护，作用域链的顶端是整个window，如果window都没有这个变量就会报错。
2. 当在对象上访问某属性的时候，首选会查找当前对象，如果没有就会顺着原型链上去查找，原型链的顶层是null，如果全程都没有找到那就会返回undefined，不会报错。 

### 2、隐式丢失
**在特定情况下会存在隐私丢失的问题， 最常见的就是作为参数传递和变量赋值**
#### (1)、作为参数传递
```javascript
var name = '行星飞行';
let obj = {
    name: '听风是风',
    fn: function () {
        console.log(this.name);
    }
};

function fn1(param) {
    param();
};
fn1(obj.fn);//行星飞行
```
在这个例子中我们将obj.fn当做一个参数传递进去fn1中去执行，这里只是单纯地传递一个函数而已，this并没有跟函数绑在一起，所以this丢失， 这里指向了window。
#### （2）、变量赋值引起this丢失
```javascript
var name = '行星飞行';
let obj = {
    name: '听风是风',
    fn: function () {
        console.log(this.name);
    }
};
let fn1 = obj.fn;
fn1(); //行星飞行
```

总结：
1. 变量赋值中fn1是obj.fn的一个引用，但是fn1引用的就是fn函数本身，此时fn1()是一个不带任何修饰的函数调用，所以应用了默认绑定，this为全局
2. 参数传递中其实就是隐式赋值。相当于var param = obj.fn，和变量赋值是一样的，都是应用了默认绑定，this指向全局。 <i>值得注意的是，return返回一个函数的时候，也是应用了默认绑定 </i>

## 三、显式绑定
**显示绑定是我们通过call apply以及bind方式改变this行为，相对于隐式绑定，我们可以清除感知到this指向的变化过程**

```javascript
let obj1 = {
    name: '听风是风'
};
let obj2 = {
    name: '时间跳跃'
};
let obj3 = {
    name: 'echo'
}
var name = '行星飞行';

function fn() {
    console.log(this.name);
};
fn(); //行星飞行
fn.call(obj1); //听风是风
fn.apply(obj2); //时间跳跃
fn.bind(obj3)(); //echo
```




参考链接 ： <https://www.cnblogs.com/jiuxia/p/11488140.html>

五种this绑定 :<https://www.cnblogs.com/echolun/p/11962610.html>