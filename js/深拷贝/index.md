一、浅拷贝
  1、通过Object.assign 进行浅拷贝

  ```javascript
    var obj = {
        a:'我是A',
        b:'我是B'
    }

    var cloneObj = Object.assign({},obj)
    
    obj.a = '我是b'

    console.log(obj) //{a: "我是b", b: "我是b"}
    console.log(cloneobj) //{a: "我是a", b: "我是b"}

  ```

  2、通过自定义函数实现浅拷贝

    ```JAVASCRIPT
        //1、 object.assign
        // var cloneObj = Object.assign({},obj);

        // 2、自定义函数实现浅拷贝
        function shallowClone(soure = {}) {
            let result = {},
                key;
            for(key in soure){
                if (soure.hasOwnProperty(key)) {
                    result[key] = soure[key]
                }
            }
            return result;
        }

        var obj1 = shallowClone(obj);
        obj.a = '我是b'

        console.log(obj.a)  //我是b
        console.log(obj1.a) //我是a
                            // 拷贝成功
    ```

3、使用concat浅拷贝数组

```javascript
let arr = [1,2,3]
let newarr = arr.concat();
newarr[1] = 100
console.log(arr) //[1,2,3]

```

4、使用slice浅拷贝数组

```javascript
let arr = [1,2,3]
let newarr = arr.slice();
newarr[1] = 100
console.log(arr) //[1,2,3]
```
5、使用展开运算符
```javascript
let arr = [1,2,3]
let newarr = [...arr]
```

  


二、深拷贝

1、通过JSON.parse和JSON.stringify,这个方法不可以将function拷贝下来，因为function不能够被JSON.stringify转换

```javascript
        var obj = {
             a:'我是a',
             b:'我是b',
             newObj:{
                 color:'black',
             },
             color:['red','blue','green','yellow'],
             func: function(){

             }
        }

        // 浅拷贝

        // object.assign
        var cloneObj = Object.assign({},obj);

        // 深拷贝
        var cloneObject = JSON.parse(JSON.stringify(obj))
        obj.newObj.color = 'white'

        console.log(obj)  //  里面的 obj.newObj.color = 'white'
        console.log(cloneObject) // obj.newObj.color = 'black'(深拷贝成功)             与上面对比发现没有讲func拷贝下来
```

2、深度优先遍历拷贝
    需要处理对象环绕问题，不然就会进入死循环，爆栈,需要使用到map来记录已经访问过的节点。

    ```javascript

        var obj = {
            a: '我是a',
            b: '我是b',
            newObj: {
                color: 'black',
            },
            color: ['red', 'blue', 'green', 'yellow'],
            func: function () {

            }
        }
        obj.c = obj  //对象环绕问题
        console.log(obj)

        // 利用map或者WeakMap来记录仪已经访问过的节点

        function deepClone(src = {}, map = new Map()){
            if (typeof src !== 'object' || src == null) {
                return src
            }
            if (map.has(src)) {
                return map.get(src)
            }
            let res;
            if (src instanceof Array) {
                res = [];
            }else{
                res = {};
            }
            map.set(src,res)
            for(let key in src){
                res[key] = deepClone(src[key], map)
            }
            return res
        }
        var newobj = deepClone(obj)

    ```


3、广度优先遍历拷贝

4、使用Object.assign
    这里需要注意的是，使用Object.assign()拷贝的是对象的属性的引用，而不是对象的本身

```javascript
let obj = {name:'sy', age:'18'}
const obj2 = Object.assign({}, obj, {name:'sss'})
console.log(obj2) ///{name:'sss', age:18}
```

