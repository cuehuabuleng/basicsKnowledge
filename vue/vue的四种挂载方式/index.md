https://www.cnblogs.com/beimeng/p/8005310.html



1.第一种,最常见.vue-cli模板就是这样

```javascript
import Vue from 'vue'
import App from './App'
 

new Vue({
el: '#app',                                  //#app 元素的 outerHTML 是 Vue 模板，该模板可以被编译成 render function。
template: '<App/>',
components: { App }
})

```

 
2.第二种，这种挂载好像是直接挂载到入口 

文件index.html 的 id=app 的dom 元素上


```javascript
new Vue({
    router,
    store,
}).$mount('#app')       
```
 
第三种，

```javascript

new Vue({
//el: '#app',
//template: '<App/>',
router,
store,
//components: { App }
render: h => h(App)
}).$mount('#app')

```

第四种，

```javascript
new Vue({
  el: '#app', 
  router,
  render: h => h(App)
})
```

 第五种：

 ```javascript
var options = {
    el: '#app',
     store,
    router,
    ...App
};
new Vue(options)

```