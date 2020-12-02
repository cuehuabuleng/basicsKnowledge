
# this的作用场景
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
上面的代码中使用call、apply和bind改变了函数fn的this指向。
在js中，当我们调用一个函数的时候，我们习惯称之为函数调用，函数处于一个被动的状态；而call和apply让函数从被动变成主动，函数主动选择自己的上下文所以这种写法称为函数应用。

*注意：如果在使用call之类的方法改变this指向的时候，指向参数提供的是null或者undefined，那么this指向的是全局对象*
```javascript
let obj1 = {
    name: '听风是风'
};
let obj2 = {
    name: '时间跳跃'
};
var name = '行星飞行';

function fn() {
    console.log(this.name);
};
fn.call(undefined); //行星飞行
fn.apply(null); //行星飞行
fn.bind(undefined)(); //行星飞行
```
**这里需要说明的是，通过bind绑定之后的this是无法在改变的，bind是硬性的绑定**

**call、apply与bind的区别**
1. call、apply和bind都是用于改变this绑定，但call和apply在改变this指向同时还会执行函数，而bind在改变this后返回是一个全新的boundFunction绑定函数.
2. bind属于硬绑、返回的boundFunction的this指向无法再次通过bind、apply或call修改；call与apply的绑定只适用于当前调用，调用完之后就没有了，下次调用还得再次绑定。
3. call和apply功能完全相同，唯一不同的是call方法传递参数是以散列形式传递，而apply方法的形参是一个数组。在传参的情况下，call的性能要高于apply，因为apply在执行的时候还有一步解析数组。
   
## 四、new绑定
准确来说，js构造函数只是使用new调用的普通函数，它并不是一个类，最终返回的对象也不是一个实例，只是为了便于理解习惯这么说。
new一个函数的中间过程分为三步：
1. 以构造器的prototype属性为原型，创建新对象
2. 将this（可以理解为上句创建的新对象）和调用参数传给构造器，执行
3. 如果构造器没有手动返回对象，则返回第一步创建的对象

**这个过程称为构造调用**
```javascript
function Fn(){
     this.name = '123'
}
let echo = new Fn();
console.log(echo.name)
```

## 五、this绑定的优先级
显式绑定 > 隐式绑定 > 默认绑定
new绑定 > 隐式绑定 > 默认绑定

这里的显式绑定和new绑定不用比较是因为这两种情况不会同时出现，同时出现会报错

```javascript
function Fn(){
    this.name = '听风是风';
};
let obj = {
    name:'行星飞行'
}
let echo = new Fn().call(obj);//报错 call is not a function
```

## 六、箭头函数的this
**箭头函数没有this，它的this取决于外层作用域中的this，外层作用域中的this指向谁，箭头函数中法人this就指向谁。**

```javascript
function fn() {
    return () => {
        console.log(this.name);
    };
}
let obj1 = {
    name: '听风是风'
};
let obj2 = {
    name: '时间跳跃'
};
let bar = fn.call(obj1); // fn this指向obj1
bar.call(obj2); //听风是风
```

上面可以看到第一次绑定this返回箭头函数之后，再次改变this指向没有生效？
因为fn函数执行时，fn里面的this指向了obj1，所以箭头函数的this也是指向obj1。此外箭头函数的this还有一个特征就是，一旦this绑定成功，那就无法再次修改，如果想要修改，需要修改他的外层函数的作用域来达到修改箭头函数的this。


## 七、相关题目

### 题目一、

```javascript
/*非严格模式*/

var name = 'window'

var obj1 = {
    name: '听风是风',
    fn1: function () {
        console.log(this.name)
    },
    fn2: () => console.log(this.name),
    fn3: function () {
        return function () {
            console.log(this.name)
        }
    },
    fn4: function () {
        return () => console.log(this.name)
    }
}
var obj2 = {
    name: '行星飞行'
};

 obj1.fn1();//听风是风
 obj1.fn1.call(obj2);//行星飞行

 obj1.fn2();//window
 obj1.fn2.call(obj2);//window

 obj1.fn3()();//window
 obj1.fn3().call(obj2);//行星飞行
 obj1.fn3.call(obj2)();//window

 obj1.fn4()();//听风是风
 obj1.fn4().call(obj2);//听风是风
 obj1.fn4.call(obj2)();//行星飞行
```

### 题目二、
```javascript
/*非严格模式*/
var name = 'window'

function Person(name) {
  this.name = name;
  this.fn1 = function () {
    console.log(this.name);
  };
  this.fn2 = () => console.log(this.name);
  this.fn3 = function () {
    return function () {
      console.log(this.name)
    };
  };
  this.fn4 = function () {
    return () => console.log(this.name);
  };
};

var obj1 = new Person('听风是风');
console.dir(obj1);
var obj2 = new Person('行星飞行');


 obj1.fn1(); //听风是风
 obj1.fn1.call(obj2); //行星飞行

 obj1.fn2(); //听风是风
 obj1.fn2.call(obj2); // 听风是风

 obj1.fn3()(); // window
 obj1.fn3().call(obj2);// 行星飞行
 obj1.fn3.call(obj2)(); // window

 obj1.fn4()();//听风是风
 obj1.fn4().call(obj2);//听风是风
 obj1.fn4.call(obj2)();//行星飞行
```

参考链接 ： 

<https://www.cnblogs.com/jiuxia/p/11488140.html>

<https://www.cnblogs.com/echolun/p/11969938.html>

五种this绑定 :<https://www.cnblogs.com/echolun/p/11962610.html>