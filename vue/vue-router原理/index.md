路由核心原理之一：更新视图而不重新请求页面.
在浏览器环境中实现这功能有两种方式：
    1、Hash路由---利用URL中的hash('#');  #本身包括后面的字符串称为hash，可以使用window.location.hash去获取
    2、利用History interface在html5新增的方法。
    3、其实还有一种，abstract，用于非浏览器应用
    vue中是通过mode这一参数控制路由的模式的。

原理：History API 和onhashchange事件。其实这两种路由模式都是通过浏览器接口实现的。
        而且还为非浏览器环境准备了一个abstract模式。这个模式的原理就是用一个数组stack模拟出浏览器历史记录栈的功能。


(hash路由)
onhashChange事件触发条件
    直接更改浏览器地址，在最后面增加或或者改变#hash
    通过改变location.hash或者location.href的值
    通过触发点击带锚点的连接
    浏览器前进后退可能导致has的变化。

    hash特点：
    1、hash虽然出现在url中，但是不会包括在http请求中，他用来指导浏览器动作，对服务端毫无影响，因此hash改变不会刷新页面。
    2、可以为hash的改变设置监听事件：　window.addEventListener("hashchange",funcRef,false)
    3. 每一次改变 hash(window.localtion.hash)，都会在浏览器访问历史中增加一个记录。
　　　　利用 hash 的以上特点，就可以来实现前端路由"更新视图但不重新请求页面"的功能了。

    两个方法：HashHistory.push() 和 HashHistory.replace()
    1、push方法是将新路由添加到浏览器访问历史的栈顶
        从设置路由改变到视图的更新流程。
        $router.push -> Hashhistory.push() -> History.transitionTo() -> History.updateRoute() -> {app._route = route} -> vim.render

         ```javascript
            $router.push() //调用方法
            HashHistory.push() //根据hash模式调用,设置hash并添加到浏览器历史记录（添加到栈顶）（window.location.hash= XXX）
            History.transitionTo() //监测更新，更新则调用History.updateRoute()
            History.updateRoute() //更新路由
            {app._route= route} //替换当前app路由
            vm.render() //更新视图
         ```


(history路由)
history api：

    History interface 是浏览器历史记录栈提供的接口，通过back()、forward()、go()等方法，我们可以读取浏览器历史记录栈的信息，进行各种跳转操作。
        History.back()
        history.forward()
        history.go(n)
    如果移动位置超出了访问历史的边界，不会报错，就会静默认失败。

    history路由的实现主要是利用到h5 的两个个新的api：window.History.pushState(stateObj,title,url) 和 window.history.replaceState(stateObject,title,url)，我们可以通过这两个方法对浏览器的历史记录栈进行修改。
        1、window.History.pushState(stateObj,title,url)
        push：和hash模式类似，将新路由添加到浏览器访问历史的栈顶。
        2
        replace：和hash模式类似、History.pushState(stateObj,title,url)，并不会将新路由添加到浏览器访问历史的栈顶，而是替换当前的路由。

        这2个方法有个共同的特点：当调用他们修改浏览器历史栈后，虽然当前url改变了，但浏览器不会立即发送请求该url，这就为单页应用前端路由，更新视图但不重新请求页面提供了基础

        参数说明：
       stateObject：当浏览器跳转到新的状态时，将触发 Popstate 事件，该事件将携带这个 stateObject 参数的副本
　　　　title：所添加记录的标题
　　　　url：所添加记录的 url

        vue中的router-link是通过阻止a标签的默认事件,然后histpry路由是怎么更新视图的呢，关键的是要触发Popstate事件。

        Popstate事件：每当同一个文档(单页面)的浏览历史，即history对象，出现变化时，就会触发Popstate事件。但是仅仅是调用pushState方法或者是replaceState方法，并不会触发该事件，只有用户点击浏览器倒退和前进按钮才会触发，或者调用back、forward、go也可以触发。而且如果因为浏览历史的改变导致加载另外一个文档，该事件也不会触发。
        用法：使用的时候，可以为Popstate指定回调函数，这个回调函数的参数是一个even事件对象，它的state属性指向pushstate和replacestate方法为当前url所提供的状态对象(即这两个方法的第一个参数)

        vue-router中单单是通过go()方法来触发Popstate方法的。(首先需要对Posptate进行监听  => 

                ```javascript
                     window.addEventListener('Popstate', (e)=> {
                        // dosth
                     })
                ```

                )
        因为：history.back() == history.go(-1)
             history.forward == history.go(1)
        这样就可以实现前后的切换，同时触发POpstate方法来更新视图。 


两种模式的比较：
    1、pushState设置的新URL可以是与当前URL同源的任意URL；而hash只可修改#后面的部分，故只可设置与当前同文档的URL
    2、pushState通过stateObject可以添加任意类型的数据到记录中；而hash只可添加短字符串
    3、pushState可额外设置title属性供后续使用
    4、history模式则会将URL修改得就和正常请求后端的URL一样,如后端没有配置对应/user/id的路由处理，则会返回404错误
    5、history模式中的pushState设置新的路由可以可以和当前的路由一模一样，这样也会将记录添加到浏览器的历史记录栈中；而hash设置的新值需要和原理的值不一样才可以触发路由的更新。

       参考链接： https://www.cnblogs.com/gaosirs/p/10606266.html


       https://zhuanlan.zhihu.com/p/27588422

       https://www.jianshu.com/p/d59971198082