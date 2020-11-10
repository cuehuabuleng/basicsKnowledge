箭头函数相当于匿名函数，并且简化了函数定义。箭头函数有两种格式，一种只包含一个表达式，连{ ... }和return都省略掉了。还有一种可以包含多条语句，这时候就不能省略{ ... }和return。

箭头函数和普通函数的区别：

    普通函数

    ```javascript
    function fun() {
        console.log('lalla');
    }

    ```

    箭头函数

    ```javascript
        let fun = () => {
        console.log('lalalala');
    }
    ```


一、箭头函数是匿名函数，不能作为构造函数，不能new(没有this)

```javascript
        let FunConstructor = () => {
        console.log('lll');
    }

    let fc = new FunConstructor();//会报错 Uncaught TypeError: FunConstructor is not a constructor
```

二、箭头函数不绑定arguments，取而代之使用...reset来接收参数

```javascript
    function A(a){
    console.log(arguments);
    }
    A(1,2,3,4,5,8);  //  [1, 2, 3, 4, 5, 8, callee: ƒ, Symbol(Symbol.iterator): ƒ]


    let B = (b)=>{
    console.log(arguments);
    }
    B(2,92,32,32);   // Uncaught ReferenceError: arguments is not defined


    let C = (...c) => {
    console.log(c);
    }
    C(3,82,32,11323);  // [3, 82, 32, 11323]
```



三、箭头函数不能够绑定this，会捕获其所在的上下文的this值，作为自己的this值。

        ```javascript
        var obj = {
        a: 10,
        b: () => {
            console.log(this.a); // undefined
            console.log(this); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
        },
        c: function() {
            console.log(this.a); // 10
            console.log(this); // {a: 10, b: ƒ, c: ƒ}
        }
        }
        obj.b(); 
        obj.c();


            var obj = {
        a: 10,
        b: function(){
            console.log(this.a); //10
        },
        c: function() {
            return ()=>{
                console.log(this.a); //10
            }
        }
        }
        obj.b(); 
        obj.c()();

        ```


四、 箭头函数通过call()或者apply方法调用一个函数，只会传入一个参数，对this并没有影响。  箭头函数的this不会因为call、bind、applay而改变。

```javascript
    let obj2 = {
        a: 10,
        b: function(n) {
            let f = (n) => n + this.a;
            return f(n);
        },
        c: function(n) {
            let f = (n) => n + this.a;
            let m = {
                a: 20
            };
            return f.call(m,n);
        }
    };
    console.log(obj2.b(1));  // 11
    console.log(obj2.c(1)); // 11
```



五、箭头函数没有原型属性

```javascript
        var a = ()=>{
        return 1;
        }

        function b(){
        return 2;
        }

        console.log(a.prototype);  // undefined
        console.log(b.prototype);   // {constructor: ƒ}
```

六、箭头函数不能当作generator函数，不能使用yield关键字。
