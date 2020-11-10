keep-alive是vue提供一个抽象组件，用来对组件进行缓存，从而节省性能，它不会被vue页面渲染成一个dom元素。

里面有两个生命周期钩子函数： actived   deactivated。

被keep-alive包裹的动态组件或router-view会缓存不活动的实例，有时候需要实时更新某些页面。
        需要用到include、exclude属性
                include：指定一些name  的组件会被缓存
                exclude： 指定一些组件不会被缓存。


原理就是：



    https://www.cnblogs.com/wangjiachen666/p/11497200.html