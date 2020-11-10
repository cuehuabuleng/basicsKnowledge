什么是继承：
    简单的说就是A对象化通过继承B对象，就能直接拥有B对象的所有属性和方法。

js户的继承的方式有6种。

1、原型链继承

    ```javascript
        // 原型链继承
        function Person(){
            this.name = 'xiaoqiao';
            this.colors = ['red', 'blue', 'green']
        }

        Person.prototype.getName = function (){
            console.log(this.name)
        }

        function Child(){}

        Child.prototype = new Person();
        var chil1 = new Child();
        var chil2 = new Child();

        chil1.colors.push('black')
        console.log(chil1.colors)  //["red", "blue", "green", "black"]
        console.log(chil2.colors)  //["red", "blue", "green", "black"]

    ```

    缺点：1、引用类型的属性被所有实例共享
          2、在创建Child实例的时候，不能像person传参

  2、借用构造函数继承
    复制父类构造函数内的属性

    优点：
        1、避免了引用类型的属性被所有实例共享
        2、可以在子类中向父类传参
    缺点：
        1、只是子类的实例，不是父类的实例，所以父类原型上的属性和方法是不会被继承的。
        2、方法都在构造函数中定义，每次都创建实例都会创建一遍方法


  ```javascript
        // 借用构造函数继承
         function Person(name){
            this.name = name;
            this.colors = ['red', 'blue', 'green']
        }

        Person.prototype.getName = function (){
            console.log(this.name)
        }
        function Child(name){
            Person.call(this, name)
        }

        var chil1 = new Child('xiaoqiao');
        var chil2 = new Child('daqiao');
        // 可以向Person传参
        console.log(chil1.name); //xiaoqiao
        console.log(chil2.name) //daqiao
        chil1.colors.push('black')
        console.log(chil1.colors)  //["red", "blue", "green", "black"]
        console.log(chil2.colors)  //["red", "blue", "green"]

        console.log(child1 instanceof Person); // false   不能识别是Person的实例


  ```

3、组合继承

    组合继承就是 原型继承和构造函数继承的结合
    思路就是：通过原型继承来继承父类原型上的方法，通过借用构造函数来实现对父类实例属性的继承。

    ```javascript
            // 组合继承
        function Person(name) {
            this.name = name;
            this.colors = ['red', 'blue', 'green']
        }

        Person.prototype.getName = function () {
            console.log(this.name)
        }
        function Child(name) {
            Person.call(this, name)  //第二次调用
        }

        Child.prototype = new Person(); //第一次调用

        var chil1 = new Child('xiaoqiao');
        var chil2 = new Child('daqiao');
        // 可以向Person传参
        console.log(chil1.name); //xiaoqiao
        console.log(chil2.name) //daqiao
        chil1.colors.push('black')
        console.log(chil1.colors)  //["red", "blue", "green", "black"]
        console.log(chil2.colors)  //["red", "blue", "green"]
        console.log(chil1 instanceof Person); // true   说明可以访问父类原型上的属性


    ```
    优点：融合了原型链继承和借用构造函数继承的优点
    缺点：调用了两次父类的构造函数，，一次是在创建子类原型的时候，一次是在子类构造函数的内部。


4、原型式继承

    ```javascript
        //  原型式继承
        function objCreate(o) {
            function fn() { }
            fn.prototype = o;
            return new fn();
        }

        var Person = {
            name:'xiaoqiao',
            friends:['cc','aa','bb']
        }

        var person1 = objCreate(Person);
        var person2 = objCreate(Person);

        // person1.friends = ['']    这里是直接在person1的实例上添加friends的属性 没有修改原型上的name  并不影响person2.frieds
        // console.log(person1.friends) // ['']
        // console.log(person2.friends) // ["cc", "aa", "bb"]

        person1.friends.push('ff')    //这里是直接操作父类的frieds数组，也就是直接操作了原型上的数组，因为存在共享问题所有就会影响person2.friends
        console.log(person1.friends) // ["cc", "aa", "bb", "ff"]
        console.log(person2.friends) // ["cc", "aa", "bb", "ff"]

        person1.name = 'xxx'

        console.log(person1.name) //xxx
        console.log(person2.name)  //xiaoqiao

    ```

    缺点：包含引用类型的属性值始终都会共享相应的值，和原型链继承一样。

    注意：当我们找对象上面的属性的时候，总是先找实例上对象的属性，没有找到的话就再去原型对象上面的属性找，要是实例对象和原型对象上有相同名字的属性，总是先取实例对象上面的属性值。

    5、寄生式继承

    思路：创建一个仅用于封装继承的函数，该函数内部使用某种形式来做增强度对象，最后返回对象。
         简单来说，就在原型式继承的基础上新增一些函数或者属性。

        ```javascript
        // 寄生式继承
            function objCreate(o) {
                function fn() { }
                fn.prototype = o;
                return new fn();
            }
            // 上面的函数其实在ECMAScript中有一新法人规范写法，Object.create(ob),效果是一样的

            var Person = {
                name: 'xiaoqiao', 
                friends: ['cc', 'aa', 'bb']
            }

            function Obcreate(o) {
                var prototype = objCreate(o);
                prototype.getname = function(){  //增强对象
                    console.log(this.name)
                }
                return prototype;
            }

            var person1 = Obcreate(Person)

            person1.getname()  //xiaoqiao
        ```

        缺点：跟借用构造函数一样，每次创建对象都会创建一遍方法


    6、寄生组合式继承
       解释：子类构造函数复制父类的自身属性和方法，子类原型只接收父类的原型属性和方法。
       其实所谓的寄生组合继承，即通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。

       背后的思路就是：不必为了子类型的原型而去调用超类型的构造函数，我们所需要的的只不过是超类型的原型的一个副本。其实本质上就是使用寄生继承来继承超类型的原型，然后将结果指定给子类型的原型。

       ```javascript
               // 寄生组合继承
         function objCreate(o) {
            function fn() { }
            fn.prototype = o;
            return new fn();
        }
        // 上面的函数其实在ECMAScript中有一新法人规范写法，Object.create(ob),效果是一样的

        function Person(name){
            this.name = name;
            this.color = ['red','black','blue']
        }

        Person.prototype.sayName = function(){
            console.log(this.name)
        }

        function child(name, age) {
            Person.call(this, name)
            this.age = age;
        }

        function prototype(children, parenr) {
            var prototype = objCreate(parenr.prototype);
            prototype.constructor = children;
            children.prototype = prototype;
        }
        prototype(child, Person);
        var child1 = new child('jack', 18);
        var child2 = new child('wen', 18);

        child1.sayName();  //jack
        console.log(child1.age) //18
        child1.color.push('yellow') 
        console.log(child1.color)//["red", "black", "blue", "yellow"]
        console.log(child2.color) //["red", "black", "blue"]

        // console.log(child1)
        // console.log(child2)
       ```

       优点：这种方式高效率，只调用了一次父类函数的构造函数，  并因此避免了在父类原型上创建不必要的多余的属性


       7、es6的新特性 class 继承（但是兼容性不好） 
       直接extends

       class其实就是es5的一个语法糖，他的绝大部分功能es5都可以做到，新的class写法只是让对象原型的写法更加清晰，更加像面向对象编程的语法。

        class的继承

        1）、关键字extends继承
            extends 关键字后只要是一个有 prototype 属性的函数，就能被继承（除了 Function.prototype 函数）。



        class继承 https://blog.csdn.net/qq_37473645/article/details/89716231
        

        

        





https://www.jianshu.com/p/85899e287694