遍历数组的方法：
    1、forEarch：
      缺点：不能同时遍历多个集合，在遍历的时候无法修改和删除集合数据，方法不能使用break，continue语句跳出循环，或者使用return从函数体返回，对于空数组不会执行回调函数
      优点：便利的时候更加简洁，效率和for循环相同，不用关心集合下标的问题，减少了出错的效率

       其中forEarch不能遍历对象，这是他和for in的一个区别

    ```javascript
            /*
        forEarch，三个参数：
        item:当前元素；
        index：当前元素的下标；
        arr：当前遍历的数组
        */
        var  a = [1,2,3,4,5]
        a.forEach((item, index, arr) => {
            console.log(item)
        })
        // 1 2 3 4 5

        // 但是不能遍历对象
        var obj = { a: 1, b: 2, c: 3}
        obj.forEach((item, index, arr) => {
            console.log(item)
        })
        // 输出： Uncaught TypeError: obj.forEach is not a function
        
    ```

    2、for in：大部分用于遍历对象。使用 for in 循环遍历对象的属性时，原型链上的所有属性都将被访问。
          定义：用于循环遍历数组或对象属性，for in循环里面的index是string类型的，
                 代码每执行一次，就会对数组的元素或者对象的属性进行一次操作
          缺点：某些情况下，会出现随机顺序的遍历，因为里面的值是string类型，所以
                增加了转换过程，因此开销较大
          优点：可以遍历数组的键名，遍历对象简洁方便

    ```javascript
        var arr = [1,2,3,4]
        var obj = {a:1, b:2, c:3}
        for (let index in arr){
            console.log(index)
        }
        //0 1 2 3
        for(let index in obj){
            console.log(index)
        }
        //a b c
    ```

    3、for of 
     优点：避免了for in的所有缺点，可以使用break,continue和return，不仅支持

                 数组的遍历，还可以遍历类似数组的对象，支持字符串的遍历
                最简洁，最直接的遍历数组的语法
                支持map和Set对象遍历

      缺点：不适用于处理原有的原生对象（原生对象是一个子集，包含一些在运动过程中动态创建的对象）

      ```javascript
        var  forofArr = [1,2,4,5,6]
        var forofObj = {a:1,b:2,c:3}
        for (let iterator of forofArr) {
            console.log(iterator)
        }//1 2 3 4 5 6

        for (let iterator of forofObj) {
            console.log(iterator)
        }// Uncaught TypeError: forofObj is not iterable
      ```

      4、for
        和forEarch 和 for in一样，不能遍历对象
        不过可以通过对象的Object.keys先获取对象的所有键名，再去遍历，，forEarch和for of想要遍历对象也是一样的方法

        ```javascript
        let Objec = {name:'132', age:'25',sex:'男'}
        let objKeys = Object.keys(Objec)
        for(let i = 0; i < objKeys.length; i ++){
            console.log(objKeys[i])
        }
        // name age sex
        ```

        5、map：返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值，是对原数组的加工，映射成一一映射的新数组,按照原始数组元素顺序依次处理元素。 对原数组不影响。

        ```javascript
        var arr = [1,2,3,4,5]
        var newarr = arr.map((item, index, arr) => {
            return item * 2;  //在里面可以做一写处理，返回新的元素 比如加减乘除， 但是如果是对元素进行条件的判断的话，就只返回true或false
        })
        console.log(newarr, arr) //[2,4,6,8,10]

        var arr = [1,2,3,4,5]
        var newarr = arr.map((item, index, arr) => {
            return item > 2;  //在里面可以做一写处理，返回新的元素 比如加减乘除， 但是如果是对元素进行条件的判断的话，就只返回true或false
        })
        console.log(newarr) //[false, false, true, true, true]
        
        ```

        6、filtter: 创建新数组，新数组放指定数组中符合条件的元素，满足条件的留下，是对原数组的过滤

        ```javascript
        // item：当前元素， index：当前元素下标 arr：当前数组
                var arr = [1,2,3,4,5]
                var newarr = arr.fillter((item, index, arr) => {
                    return item > 2; //这里只能对数据进行筛选判断，不能够修改，filter起到的是一个过滤 作用
                })
                console.log(newarr) //[a,b,c,d,e]
        ```

        上面 5、6两种方法 ，都不会对原数组产生影响。

遍历对象的方法：

    1、for......in
    for … in 循环不仅可以遍历数字键名,还会遍历原型上的key值和手动添加的其他键；

    ```javascript
        let obj = {
        id:1,
        name:'xcxx',
        age:18
    }
    obj.xx = 123;
    Object.setPrototypeOf(obj,{
        a:1,
        b:2
    })
    console.log(Object.keys(obj)) // ["id", "name", "age", "xx"]
    console.log( Object.getOwnPropertyNames(obj))// ["id", "name", "age", "xx"]
    for(let index in obj){
        console.log(index)
    }
    //id name age xx a b
    ```


    2、Object.keys()   输出对象的key值组成的数组
       Object.values() 输出对象的值组成的数组

       ```javascript
       var obj = {
           id:1,
           name:'javascript',
           age:88
       }
       console.log(Object.keys(obj))  //['id','name','age']
       console.log(Object.values(obj)) //[1, 'javascript', 88]
       ```

    3、Object.getOwnpropertyName(obj)
      返回一个数组，包括对象自身的所有属性（包含不可枚举属性）
      遍历可以获取keyu和value

      ```javascript
      var obj = {
          id:1,
          name:'javascript',
          age:18
      }
      Object.getOwnPropertyNames(obj).forEarch((item, index) =>{
          console.log(item)   //id name age
          console.log(obj[item])  // 1 javascript 18
      })
      ```

      4、for of 
        1、Symbol.iterator
            一个数据结构只要部署了 Symbol.iterator 属性, 就被视为具有 iterator接口, 就可以使用 for of循环。对象也是如此
            对象没有 Symbol.iterator这个属性,所以使用 for of会报json is not iterable
            数组 Array
            Map
            Set
            String
            arguments对象
            Nodelist对象, 就是获取的dom列表集合
            以上这些都可以直接使用 for of 循环。 凡是部署了 iterator 接口的数据结构也都可以使用数组的 扩展运算符(…)、和解构赋值等操作。

        所以要使用for of来遍历对象，可以有以下办法：

            1、为对象添加迭代器：如果对象是非数组类的对象，为对象添加[Symbol.iterator]属性，并指向一个迭代器

            ```javascript
            var obj = {
                        a:1,
                        b:2,
                        c:3
                    }
                    obj[Symbol.iterator] = function(){
                        var keys = Object.keys(this);
                        var count = 0;
                        return {
                            next(){
                                if (count < keys.length) {
                                    return {
                                        value:obj[keys[[count++]]],  //后面的循环打印出什么值，取决于这里的value
                                        done:false
                                    }
                                }else{
                                    return{
                                        value:undefined,
                                        done:true
                                    }
                                }
                            }
                        }
                    }
                    for(let index of obj){
                        console.log(index)
                    }
                    //  1 2 3 

            ```

            2、如果是类数组对象，可以使用Array.form转化成数组

            ```javascript
                var obj = {
                    0: 'onde',
                    1: 'two',
                    2: 'three',
                    length:3   //这里没有length的话，就会变空数组
                }
                obj = Array.from(obj);
                console.log(obj)
                for (let k of obj) {
                    console.log(k)  // onde two three
                }
            ```
