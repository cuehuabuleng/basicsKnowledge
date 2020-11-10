是什么：
toString() 和 valueOf() ： 基本上所有js类型都拥有这两个方法，null除外。他们两解决JavaScript值运算与显示问题。都是隐式调用。


对象通过toString或valueOf方法转换为原始值，JS语言核心的内置类首先尝试使用valueOf()，再尝试使用toString()

区别：
    toString() 返回的是对象字符表示，二者并存下，在字符运算中，会优先调用toString()
    一般来说，对象到字符串的转换经过了如下步骤：
    具体：1、如果对象中有toString()方法，就会调用这个方法。如果他返回一个原始的值，js将这个值转换成字符串对象，并且返还这个字符串的结果。
          2、如果对象没没有这个toString()方法，或者这个方法并不返回一个原始值，那么js将调用valueOf()方法
          3、否者js无法从toString()或者valueOf()获的一个原始值，因此这时候将还会抛出一个类型错误

    ```javascript
        ({}.toString());       //=>  "[object Object]"   

        [1,2].toString();      //=>  "1,2"   

        true.toString();       //=>  "true"    

        new Date(1970,0,1).toString();  //=>  "Thu Jan 01 1970 00:00:00 GMT+0800 (CST)"    

        Error("一个错误信息").toString();    //=>  "Error: 一个错误信息"    

        (function (x){return x}).toString();   //=>  "function (x){return x}"     

        /\d/.toString();    //=>  "/\\d/"  或者 "/\d/" 浏览器不同返回也可能会不同

    ```

    valueOf() 返回的是对象原始值，二者并存的情况下 ,在数值运算中会优先调用valueOf方法。
    一般来说，对象到数字的转换过程如下：
            1、如果对象具有valueOf()方法，后者返回一个原始值，则js将这个原始值转换成数字，并返回这个数字
            2、否则，如果对象具有toString()方法，后者返回一个原始值，则js转换返回
            3、否则就抛出异常

    ```javascript
        [1,2].valueOf();  //=>  [1,2]  

        (function (){}).valueOf();   //=>  function (){}

        /\d/.valueOf();    //=>  /\d/  

        new Date().valueOf();   //=>  1599913468297
    ```




    一些相关的隐式转换的问题

    ```javascript
    !![] == true //结果是true 
    // ! 操作符，会将操作数的布尔值求反， ！！就是类型转换   这里主要的是[] 转成布尔值是 true

    [] == true   //结果是false 
    // 这里会先将 true转为 1 再 将[] 转为0 ，再进行比较

    ![] == []    //结果是true
    // 先将[]转为布尔 true ,然后取反， false 再转为 0 ， 右边的[]直接转为 0
    ```



    ```javascript

    [] 转为字符串是 ""       // String([]) 返回""
    [] 转为数字是 0            // Number([]) 返回0
    [] 转为布尔值是 true        // Boolean([]) 返回true
    true 转为数字是 1       // Number(true) 返回1
    false 转为数字是 0      // Number(false) 返回0


    [] == 0      //返回结果是 true
    ![] == 0     //返回结果是 true
    [] == ''     //返回结果是 true
    !![] == ''   //返回结果是 false
    '' == true   //返回结果是 false
    ```



    比较规则：

    这里我们重点说说，相等运算符（==） 在遇到两个操作数类型不同的时候，要遵守的规则和类型转换
    1、如果-个值是null, 另一个是undefined，则它们相等
    null == undefined //返回true
    2、如果一个值是数字，另一个是字符串，先将字符串转换为数字，然后使用转换后的值进行比较。

    1 == "1" //1==1  //结果是true
    2 == "1" //2==1  //结果是false
    3、如果其中一个值是true，则将其转换为1再进行比较。如果其中一个值是false，则将其转换为0再进行比较。

    "1" == true     //1==1 结果是true
    0 == false      //0==0 结果是true
    4、如果一个值是对象，另一个值是数字或字符串，则将对象转换为原始值，然后再进行比较。对象通过toString()方法或者valueOf()方法转换为原始值，JavaScript语言核心的内置类先尝试使用valueOf()，再尝试使用toString()，除了日期类，日期类只能使用toString()转换，那些不是JavaScript语言核心中的对象则通过各自的实现中定义的方法转换为原始值。

    原始值：不可变更的值，包括undefined、null、布尔值、数字、和字符串。

    所有的对象都有toString() 和 valueOf()这两个方法。
    toString()方法的作用是，返回一个反映这个对象的字符串。
    valueOf()方法的作用是，一个对象那个如果存在任意原始值，它就默认将对象转换为表示它的原始值。

    5、其他不同类型之间的比较均不相等。




    <!-- https://segmentfault.com/a/1190000011853970 -->


