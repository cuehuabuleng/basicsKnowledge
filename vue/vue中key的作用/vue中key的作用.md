# **vue中key的作用**
## **1、v-if中，key管理可复用的元素。**
&ensp;&ensp;在vue的渲染中，会尽可能地去高效地去渲染元素。会复用已经有的元素，不是重头开始渲染。但是在一些场景中，这样会带来一些不好的效果，比如切换不同的登录方式的时候，**就需要对两个切换的不同组件使用到不通的key值来做一个唯一的标识。**

&emsp;&emsp;如官网的例子：
```html
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>
```

&emsp;&emsp;那么在上面的代码中切换 <code>loginType</code> 将不会清除用户已经输入的内容。因为两个模板使用了相同的元素，<code> input </code> 不会被替换掉——仅仅是替换了它的 <code>placeholder</code>。


&emsp;&emsp;这样也不总是符合实际需求，所以 Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 key attribute 即可：

```html
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```


## **2、列表渲染v-for中的key。**
&emsp;&emsp;当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。

&emsp;&emsp;key的作用让每个item有一个唯一的识别身份，可以下标值index或者id, 主要是为了vue精准的追踪到每一个元素，**高效的更新虚拟DOM。**
                           
## **3、使用key属性强制替换元素**
&emsp;&emsp;key属性还有另外一种使用方法，即强制替换元素，从而可以触发组件的生命周期钩子或者触发过渡。因为当key改变时，Vue认为一个新的元素产生了，从而会新插入一个元素来替换掉原有的元素。

&emsp;&emsp;借用官方文档上的例子：

```html
<transition>
  <span :key="text">{{text}}</span>
</transition>

```
&emsp;&emsp;这里如果text发生改变，整个<span>元素会发生更新，因为当text改变时，这个元素的key属性就发生了改变，在渲染更新时，Vue会认为这里新产生了一个元素，而老的元素由于key不存在了，所以会被删除，从而触发了过渡。

假如没有key属性：

```html
<transition>
  <span>{{text}}</span>
</transition>
```
&emsp;&emsp;那么当text改变时，Vue会复用元素，只改变<code>span</code>元素的内容，而不会有新的元素被添加进来，也不会有旧的元素被删除。

&emsp;&emsp;同理，<code>key</code>属性被用在组件上时， 当<code>key</code>改变时，会引起新组件的创建和原有组件的删除，此时组件的生命周期钩子就会被触发。

## **总结**
&emsp;&emsp;所以一句话，key的作用主要是为了高效的更新虚拟DOM。另外vue中在使用相同标签名元素的过渡切换时，也会使用到key属性，其目的也是为了让vue可以区分它们，