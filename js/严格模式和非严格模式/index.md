一、什么是严格模式和非严格模式？
    严格模式通过抛出错误来消除一些原有的静默错误
    严格模式修复了一些导致JavaScript引擎难以优化的缺陷：有的时候相同模式下，严格模式可以比非严格模式下运行的更快。
    严格模式禁用了ECMAScript的未来版本中可能定义的一些语法

二、如何使用严格模式：

1、函数中使用 

 ```javascript
    function(){
        'use strict' 
    }

 ```
2、整个脚本使用：在这个JavaScript文件开头写 'use strict'



三、严格模式和非严格模式的区别？

1、严格模式下不允许使用 with  ，因为with会造成全局变量的污染。

2、严格模式下不允许给未声明的变量赋值

3、严格模式下arguments变为参数的静态副本。非严格模式下，arguments对象里面的元素和对应的参数指向同一个值得引用

```javascript
//解释一下!function(){}
// 解析器解析一个语句得时候，如果以function开头，就会理解为函数声明
// 在其前面加一个 ！ 可以让饥解释器理解为函数表达式，这样就可以直接执行了
        !function(a) {
            arguments[0] = 100;
            console.log(a);  //100
        }(1);

        !function(a) {
            'use strict';
            arguments[0] = 100;
            console.log(a);  //1
        }(1);
```
但是如果传递得参数是对象得话，那就形参和arguments共享传递

```javascript

!function(a) {
	'use strict';
	console.log(a.x);  //1
	arguments[0].x = 100;
	console.log(a.x);  //100
}({x: 1});
```


4、严格模式下删除参数名、函数名，会报错。非严格模式下返回false，静默失败。（静默失败：不报错业没有任何效果）

```javascript
    !function(a) {
        console.log(a);  //1
        console.log(delete a);  //false
        console.log(a);  //1
    }(1);

    !function(a) {
        'use strict';
        console.log(a);  //1
        delete a;  //SyntaxError（语法错误）
        console.log(a);  //1
    }(1)

```

5、严格模式下，函数参数名重复会报错。非严格模式下最后一个重名参数会覆盖之前得重名参数。

```javascript

    !function (a, a, b) {
        console.log(a + b);  //5
    }(1, 2, 3);

    !function (a, a, b) {
        'use strict';
        console.log(a + b);  //SyntaxError
    }(1, 2, 3);

```

5、严格模式下....

。。。。。
。。
。






https://blog.csdn.net/qq_41139830/article/details/80543424