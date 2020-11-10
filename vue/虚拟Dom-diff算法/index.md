一 、先讲一下vue的模板转换成视图的过程
 . vue通过编译将template模板变成渲染函数（render），执行渲染函数可以得到一个虚拟节点树
 . 在对Model进行操作时， 会触发对应Dep中的watcher对象。然后watcher对象就会调用响应的update来修改视图。在这个过程中就是将新旧的虚拟节点进行差异的比较，然后将比较的结果通过dom操作来更新到视图上面。 
 
简单的讲，在vue的底层实现上， 就是将模板编译成虚拟dom的渲染函数。然后结合vue的响应式，通过diff算法计算出重新渲染组件的最小代价， 然后应用到DOM操作上面。

二、什么是虚拟dom：
     虚拟dom其实就是一棵以js对象为基础的dom节点树， 使用对象属性来描述节点，实际上他是一层对真实DOm的抽象。然后可以通过一系列操作可以将其映射到真是环境上面。
三、虚拟dom作用是啥：
     虚拟dom的最总目标是将虚拟节点渲染到视图上面。但是如果直接覆盖的话，那就会产生很多不必要的dom操作。造成性能上的浪费。
     所以他在vue中主要做两件事情：
        1、提供与真实节点相对应的虚拟节点vnode
        2、虚拟DOM在虚拟节点映射到视图的过程中，将虚拟节点与上一次渲染视图所使用的旧虚拟节点（oldVnode）做对比，找出真正需要更新的节点来进行DOM操作，从而避免操作其他无需改动的DOM。

四、为什么使用虚拟DOM
1、跨平台优势
    因为虚拟dom是一js对象为基础，不依赖真实环境
2、提高效率 
    虚拟dom的本质就是在js和dom之间做了一个缓存，通过js操作虚拟dom，然后将最后的变换展现在真实dom上面。减少了大量的dom操作，提升性能。
3、提升渲染性能
    优势在于大量的操作下，以及频繁的数据更新下，能够通过diff算法进行对视图组件的合理、高效的更新。

五、diff算法；
Vue的diff算法是基于snabbdom改造过来的，仅在同级的vnode间做diff，递归地进行同级vnode的diff，最终实现整个DOM树的更新。

diff 算法包括几个步骤：


用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中
当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异
把所记录的差异应用到所构建的真正的DOM树上，视图就更新了

    具体的实现流程：

    1、数据更新之后 通过setter 触发 dep.notify，通知里面的每个watcher， 然后watcher会调用update函数进行更新，和渲染 render
    2、render函数会生成新的一棵虚拟dom树，这时候会去与旧的虚拟dom树进行对比，找出差异，然后将这些差异应用到真实dom上面，更新视图。
    3、比较的过程如下：
        1）首先会通过一个path函数，去判断两个虚拟节点是否是相同的  如果是不相同的，就直接替换  
            如果相同，那就值得比较，那就往下走pathVnode()
        2）在pathVnode()里面，节点的比较有五种情况

        patchNode的源码

        ```javascript
        patchVnode (oldVnode, vnode) {
            const el = vnode.el = oldVnode.el
            let i, oldCh = oldVnode.children, ch = vnode.children
            if (oldVnode === vnode) return
            if (oldVnode.text !== null && vnode.text !== null && oldVnode.text !== vnode.text) {
                api.setTextContent(el, vnode.text)
            }else {
                updateEle(el, vnode, oldVnode)
                if (oldCh && ch && oldCh !== ch) {
                    updateChildren(el, oldCh, ch)
                }else if (ch){
                    createEle(vnode) //create el's children dom
                }else if (oldCh){
                    api.removeChildren(el)
                }
            }
        }

        // const el = vnode.el = oldVnode.el ，让vnode.el引用到现在的真实dom，当el修改时，vnode.el会同步变化。
        ```

            1.if (oldVnode === vnode)，他们的引用一致，可以认为没有变化。

            2.if(oldVnode.text !== null && vnode.text !== null && oldVnode.text !== vnode.text)，文本节点的比较，需要修改，则会调用Node.textContent = vnode.text。

            3.if( oldCh && ch && oldCh !== ch ), 两个节点都有子节点，而且它们不一样，这样我们会调用updateChildren函数比较子节点，这是diff的核心，后边会讲到。

            4.else if (ch)，只有新的节点有子节点，调用createEle(vnode)，vnode.el已经引用了老的dom节点（在第一步path函数的时候），createEle函数会在老dom节点上添加子节点

            5.else if (oldCh)  新节点上面没有子节点，老节点上面有子节点，直接删除老的子节点。

        3) updateChildren方法  diff算法的核心
            1、先定义四个指针，分别指向 新节点的首尾和旧节点的首尾 newStartIdx newEndIdx oldStartIdx oldEndIdx
            2、比较的过程
                【1】当sameVnode(oldStartVnode, newStartVnode)或者sameVnode(oldEndVnode, newEndVnode) 一样的时候，直接将该节点进行patchVnode即
                【2】当oldStartVnode与newEndVnode满足sameVnode,这时候说明数据更新之后，oldStartVnode已经跑到oldEndVnode后面去了，所以在进行patchVnode的同时，需要将返回的vnode （patchVnode会返回一个vnode）移动到oldEndVnode的后面去。
                【3】如果oldEndVnode与newStartVnode满足了sameVnode，这时候说明数据更新之后，oldEndVnode节点移动到了oldStartVnode之前，也需要在pathVnode的时候，将返回的vnode节点移动到真实dom的oldStartVnode之前去
                【4】、
                    a.当上面的情况都不符合的时候，则会通过createKeyToOldIdx，得到一个oldKeyToIdx，里面存放了一个key为旧的VNode，value为对应的index的哈希表，从表中查找是否有与新节点 一致key的旧节点的VNode，如果同时满足sameVnode，patchVnode的同时会将这个真dom（elmToMove）移动到oldStartVnode对应的真实DOM的前面；
                    b.当然也有可能newStartVnode在旧的VNode节点找不到一致的key，或者是即便key相同却不是sameVnode，这个时候会调用createElm创建一个新的DOM节点。

                 整个循环结束
            3、结束while循环之后，会出现两种情况
                【1】、oldstartVnode > oldEndVnode 先出现
                      说明旧节点已经遍历完，新节点还有节点没有遍历完，那就将新节点的两个指针之间的节点插入到真实dom中
                【2】、newStartVnode > newEndVnode 先出现
                        说明新节点已经遍历完了， 旧节点还有节点么有遍历完，那就直接将就旧节点首尾指针之间的元素直接都删除

            4、至此diff算法完成




            https://www.cnblogs.com/chengxs/p/10392310.html