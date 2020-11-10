
首先两者都有许多相似之处，都有
    virtualDom
    提供响应式(Reactive)和组件优化(composable)的视图组件
    将注意力集中在核心库，将其他的功能如路由和全局状态管理交给相关的库

# 运行时候的性能
    React中：当某个组件的状态发生了改变，它以该组件为根，重新渲整个组件树，
             如果要避免不必要的子组件的重新渲染，需要在所有空能的地方使用 PureComponent,或者手动实现shouldComponentUpdate方法。同时你可能会需要使用不可变的数据结构来使得你的组件更容易被优化。

    vue中：组件的依赖是在渲染过程中自动追踪的，所以系统能精确地知道哪个组件需要被重洗渲染，没有了上述的组件子树问题限制。

# html&css
    jsx和template的区别 react是函数式编程，vue跟w传统的web模式很像，vue的单文件组件的模式是由 模板+javascript+css的组合模式呈现。
    组件内css的作用域区别

# 数据的响应式系统
    vue：当数据改动的时候，界面就会更新。 改动数据之后，数据本身会把这个改动推送出去，告知渲染系统自动进行渲染。
    react：需要调用方法SetState。  用户要给系统一个明确的信号说明现在需要重新渲染了，这个系统才会重新渲染。






https://www.zhihu.com/question/309891718/answer/1066629375

https://cn.vuejs.org/v2/guide/comparison.html#React