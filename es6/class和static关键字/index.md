class:
    ES6引入了Class（类）这个概念,作为对象的模板,通过class关键字,可以定义类。基本上,ES6的class可以看作只是一个语法糖,它的绝大部分功能,ES5都可以做到,新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。上面的代码用ES6的“类”改写,就是下面这样。

    avaScript语言的传统方法是通过构造函数,定义并生成新对象,prototype 属性使您有能力向对象添加属性和方法。
    下面是通过传统的方式创建和使用对象的案例:

    ```javascript
    function Person(x,y){
        this.x = x;
        this.y = y;
    }
    
    Person.prototype.toString = function (){
        return (this.x + "的年龄是" +this.y+"岁");
    }

    let person = new Person('张三',12);
    console.log(person.toString());
    ```

    用ES6的“类”改写,就是下面这样。

    ```javascript
    class Person{
    // 构造
    constructor(x,y){
        this.x = x;
        this.y = y;
        }
        toString(){
            return (this.x + "的年龄是" +this.y+"岁");
        }
    }
    let person = new Person('张三',12);
    console.log(person.toString());
    ```
    可以看到class里面有个cunstructor，这就是累点的构造方法，也就说ES5的构造函数Person对应着ES6的构造方法cunstructor

    注意,定义“类”的方法的时候,前面不需要加上function这个关键字,直接把函数定义放进去了就可以了。

    ES6的类,完全可以看作构造函数的另一种写法。





static

    一、静态方法：
    类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

    实例不可以继承父类的静态方法,但是子类可以，或者直接通过类调用

    ```javascript
    class Foo {
          static  classMethod(){
                   return 'hello'
         }
    }

    Foo.classMethod()   //'hello'
    class newFoo extends Foot{}
    newFoot.classMethod(); //'hello'

    var foo =new Foo();
    foo.classMethod()
                // TypeError: foo.classMethod is not a function
    ```
    为什么使用静态方法：阻止方法被实例继承，类的内部相当于实例的原型，所有在类中直接定义的方法相当于在原型上定义方法，都会被类的实例继承，但是使用static静态方法定义的不会被实例继承，而且可以被实例直接应用

      静态方法有什么用处呢，就是一般用来定义一些工具类函数，不需要用到实例属性的方法。



    二、静态属性
    静态属性指的是Class本身的属性，即Class.propname，而不是定义在实例对象（this）上的属性。
    下面的写法为Sea定义了一个静态prop，目前，只有这种写法可行，因为ES6明确规定，Class内部只有静态方法，没有静态属性。

    ```javascript
    class Foo {}
    Foo.prop = 1;
    Foo.prop // 1
    ```


    说明:目前ES6，只有这种写法可行，因为ES6明确规定，Class内部只有静态方法，没有静态属性。

    定义实例属性的方法：2种
    1、在类中定义

    ```javascript
    class MyClass {
    myProp = 42;
    
    constructor() {
        console.log(this.myProp); // 42
  }
}

var newMyclass = new MyClass();  //此时的newMyclass的隐式原型指向的是Myclass的prototype
newMyclass.myProp //42    可以通过new一个实例来获取class里面的属性。
 
//上面代码中，myProp就是MyClass的实例属性。在MyClass的实例上，可以读取这个属性。 

    
    ```
    2、在constructor中定义（react中经典写法）

    ```javascript
    class ReactCounter extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            count: 0
            };
        }
        }
        
        //等价于
        class ReactCounter extends React.Component {
        state = {
            count: 0
        };
    }
    ```


    定义静态属性的方法
    1，就和普通的Object添加属性一样

    ```javascript
    // 老写法
        class Foo {
        // ...
        }
        Foo.prop = 1;

        // 新写法
        class Foo {
        static prop = 1;
        }
    
    ```

     缺点：老写法的静态属性定义在类的外部。整个类生成以后，再生成静态属性。容易忽略
     
    如下：

    ```javascript
    class MyClass {
    static myStaticProp = 42;
    
    constructor() {
        console.log(MyClass.myStaticProp); // 42
    }
    }
    ```


class不存在变量提升，不能够先使用再定义
