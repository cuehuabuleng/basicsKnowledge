null和typeof的区别：

```javascript
console.log(typeof null) //object
console.log(typeof undefined) //undefined
console.log(null == undefined) //true

```

1、null表示没有对象，即该处不应该没有值。
    （1）、作为函数的参数，表示该函数的参数不是对象
    （2）、作为对象原型链的终点

2、undefined 表示缺少值，就是此处应该有一个值，但是还没有定义。
    （1）、变量被声明了，但是没有赋值，就等于undefined
    （2）、调用函数时，应该提供的参数没有提供，改参数就等于undefined
    （3）、对象没有赋值的属性，改属性的值就是undfined
    （4）、函数没有返回值，默认返回就是undfined