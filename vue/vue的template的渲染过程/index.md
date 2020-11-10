vue的渲染过程：

一、把模板编译成 render函数。compile编译过程。
    分成三个阶段：
    1、parse： 解析。使用正则对template模板中的一些指令、class、style等数据进行解析，生成一课AST。with语法
    2、optimize： 主要作用就是标记static静态节点，这是Vue编译过程的一处优化，当后面的update更新界面的时候，会有一个patch的过程，diff算法会直接跳过静态节点，减少比较的过程。优化性能。
    3、generate： 将AST转化成render function字符串的过程、得到结果是render的字符串以及staticRenderFns字符串。
    经过这三个步骤之后，组件中就会存在渲染VNode所需的render function了

二、实例进行挂载，根据根节点render函数的调用，递归生成虚拟dom

三、对比虚拟dom，渲染到真实dom

四、组件内的data发生改变，就会触发对应的视图进行改变。



整个vue的实现流程：

第一步：解析模板成 render 函数
第二步：响应式开始监听
第三步：首次渲染，显示页面，且绑定依赖
第四步：data 属性变化，触发 rerender


1. 把模板解析为 render 函数
    -运用 with
    -模板中的所有信息都被 render 函数包含
    -模板中用到的 data 中的属性，都变成了 JS 变量
    -模板中的 v-model v-for v-on 都变成了 JS 逻辑
    -render 函数返回 vnode

2. 响应式开始监听
    -Object.defineProperty
    -将data 的属性代理到 vm 上.

3. 首次渲染，显示页面且绑定依赖
    -初次渲染，执行 updateComponent, 执行 vm._render()
    -执行 render 函数，会访问到 data 下的数据
    -会被响应式的 get 方法监听到
    -执行 updateComponent，会走到 vdom 的 patch 方法
    -patch 将 vnode 渲染成 DOM，初次渲染完成

4. data 属性变化，触发 rerender
    -修改属性，被响应式的 set 监听到
    -set 中执行 updateComponent
    -updateComponent 重新执行 vm._render()
    -生成的 vnode 和 prevVnode ，通过 patch 进行对比
    -渲染到 html 中