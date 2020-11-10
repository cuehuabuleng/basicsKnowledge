apply：调用一个对象的一个方法， 使用另外一个对象替换当前对象。例如：B.apply(A, arguments);即A对象应用B对象的方法。
        A.apply()，可以接受thisObj和一个参数的数组，如果没有提供这两个参数那么Global对象就会 
       被用作thisObj

示例：

```javascript
       // 例1
        window.number = 'one';
        document.number = 'two';

        var s1 = {number: 'three' };
        function changeColor(){
            console.log(this.number);
        }

        changeColor.apply();         //one (默认传参)
        changeColor.apply(window);   //one
        changeColor.apply(document); //two
        changeColor.apply(this);     //one
        changeColor.apply(s1);       //three


    //例2
    function Pet(words){
        this.words = words;
        this.speak = function () {
            console.log( this.words)
        }
    }
    function Dog(words){
        //Pet.call(this, words); //结果： Wang
       Pet.apply(this, arguments); //结果： Wang
    }
    var dog = new Dog('Wang');
    dog.speak();

```


call: 同样也是调用一个对象的一个方法，使用另外一个对象代替当前对象。例如：B.call(A, args1,args2);即A对象调用B对象的方法。
       可以接受thisObj和多个惨参数，如果没有提供thisObj参数那么Global对象就会被用作
       thisObj
示例：
```javascript
// 视例1
        window.color = 'red';
        document.color = 'yellow';

        var s1 = {color: 'blue' };
        function changeColor(){
            console.log(this.color);
        }

        changeColor.call();         //red (默认传递参数)
        changeColor.call(window);   //red
        changeColor.call(document); //yellow
        changeColor.call(this);     //red
        changeColor.call(s1);       //blue
// 视例2
    var Pet = {
        words : '...',
        speak : function (say) {
            console.log(say + ''+ this.words)
        }
    }
    Pet.speak('Speak'); // 结果：Speak...

    var Dog = {
        words:'Wang'
    }

    //将this的指向改变成了Dog
    Pet.speak.call(Dog, 'Speak'); //结果： SpeakWang
```

区别：其中他们两个的主要区别就是后面的参数传递，call可以接受多个参数，apply只能将参数放进一个数组里面进行传递
作用：他们的作用都是改变this指向

bind: bind会返回一个新的函数，，bin()的第一个参数将作为它运行时的this，之后的一序列参数将会在传递的实参前传入作为它的参数

       ```javascript
       function foo(y){console.log( this.x+y)}
       var m={x:1};     //要绑定的对象
       var g=foo.bind(m);  //通过调用g(x)来调用m.foo(x)
       g(2)
       //3
       ```