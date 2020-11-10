一、单例模式

    什么是单例模式 ：
        单例就是单一的意思，单例模式的定义是保证一个类仅有一个实例，并且提供一个访问它的全局访问点。通俗的讲，单例模式实现的是一个构造函数只能创造一个新的对象。
        在开发中，其实就是一个实例在整个网页的生命周期里只创建一次，后续再调用实例创建函数的时候，返回的仍然是之前创建的实例。比如页面中的登陆框，显示消息的提示狂，都只需要一个实例 看例子：(./单例全局提示框。。。)

    如何实现单例：
        实现的思路就是，一般是先判断实例是否存在，如果存在直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。

        1、全局变量实现单例模式

        ```javascript
        // 全局变量实现单例
        var instance = null;
        var getInstance = function(arg){
            if(!instance){
                instance = arg
            }
            return instance;
        }
        var a = getInstance('a')
        var b = getInstance('b')
        console.log(a === b) //true
        // 缺点就是定义一个全局变量的方式非常的不优雅，会造成变量的污染，也不好复用代码。
        ```
        2、利用闭包来实现单例

        ```javascript
        var Singleton = function (name) {
            this.name = name
        }

        Singleton.getInstance = (function (){
            var instance;
            return function(name){
                if(!instance){
                instance = new Singleton(name)
            }
            return instance;
            }
        })()
        var a = Singleton('a')
        var b = Singleton('b')
        console.log(a === b) //true
        
        ```

        3、直接使用函数来实现单例

        ```javascript
        function Singleton(name){
            this.name = name
            this.instance = null
        }

        Singleton.getInstance = function(name){
            if(!this.instance){
                this.instance = new Singleton(name)
            }
            return this.instance
        }
        var a = Singleton.getInstance('a')
        var b = Singleton.getInstance('b')
        console.log(a === b) //true
        ```

        4、通用的单例设计

        ```javascript
        var People = function (name) {
            this.name = name;
        }

        var Singleton = function (obj) {
            var instance;
            return function () {
                if (!instance) {
                    instance = new obj(arguments)
                }
                return instance;
            }
        }
        var peopleSingle = Singleton(People)
        var a = new peopleSingle('a')
        var b = new peopleSingle('b')
        console.log(a === b) //true
        ```

        5、 es6单例模式

        ```javascript
         class People{
            constructor(name){
                if(typeof People.instance === 'object'){
                    return People.instance;
                }
                People.instance = this;
                this.name;
                return this;
            }
        }

        
        var a = new People('a')
        var b = new People('b')
        console.log(a, b)
        console.log(a === b) //true
        ```

    单例模式的作用场景：
    
