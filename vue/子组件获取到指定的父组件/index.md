子组件调用父组件：
1、在父组件的生命周期函数里面声明一个window变量指向这个组件的this，就可以在子组件里面通过window对象取到父组件的实例了
2、使用root访问到根父组件。