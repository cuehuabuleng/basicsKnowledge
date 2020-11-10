new关键字中主要的作用是：继承

例子：

```javascript
function Animal(name){
  this.name = name;
}
Animal.color = "black";
Animal.prototype.say = function(){
  console.log("I'm " + this.name);
};
var cat = new Animal("cat");

console.log(
  cat.name, //cat
  cat.height //undefined
);
cat.say(); //I'm cat

console.log(
  Animal.name, //Animal   这里打印的Animal是方法名  Animal首先会去找自身有没有name  到了name,注意：但这个name不是我们定义的name,而是函数对象内置
                // 的属性。


  Animal.color //back
);
Animal.say(); //Animal.say is not a function  
                // 这里Animal首先会去自身找，在自身找不到，就沿着原型链去找，这里Animal的原型链是 Animal-> Function.prototype->Object.prototype
                // 发现原型上面并没有这个方法。


```

var cat = new Animal("cat"); 用这段代码来解释一些new

JS引擎在执行这句代码时，做了很多工作，用伪代码模拟其工作流程如下：

```javascript
 var obj = {};
 obj.__proto__ = Animal.prototype;
 var result = Animal.call(obj,"cat");
 return typeof result === 'obj'? result : obj;
```

1）创建一个空对象obj;

（2）把obj的__proto__ 指向Animal的原型对象prototype，此时便建立了obj对象的原型链：obj->Animal.prototype->Object.prototype->null
（3）在obj对象的执行空间调用Animal函数并传递参数“cat”。 相当于var result = obj.Animal("cat")。
       当这句执行完之后，obj便产生了属性name并赋值为"cat"。
（4）考察第3步返回的返回值，如果无返回值或者返回一个非对象值，则将obj返回作为新对象；否则会将返回值作为新对象返回。


简单的来说new关键字是：

1.创建一个空对象，并使该空对象继承Func.prototype；

2.执行构造函数，并将this指向刚刚创建的新对象；

3.返回新对象；