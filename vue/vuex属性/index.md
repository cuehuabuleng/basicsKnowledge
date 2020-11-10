vuex是专门为vue开发的状态管理模式，统一管理和维护各个组件的可变化状态。

vuex得五个属性：

state：
    state是vue想的基本数据，(可以理解成store中声明变量的地方)。vue组件从store中获取状最简单的方法就是写在计算属性中。通过在根实例注册store选项，子组件可以通过this.$sore.state访问到state里面定义的数据。
    当一个组件需要获取多个状态的时候，我们需要借助mapState辅助函数来帮助我们生成计算属性

    修改state：
        可以不通过mutation，直接修改state也是可以的，但是官方不提议这样做：
        引用官方文档：再次强调，我们通过提交 mutation 的方式，而非直接改变 store.state.count，是因为我们想要更明确地追踪到状态的变化。这个简单的约定能够让你的意图更加明显，这样你在阅读代码的时候能更容易地解读应用内部的状态改变。此外，这样也让我们有机会去实现一些能记录每次状态改变，保存状态快照的调试工具。有了它，我们甚至可以实现如时间穿梭般的调试体验。由于 store 中的状态是响应式的，在组件中调用 store 中的状态简单到仅需要在计算属性中返回即可。触发变化也仅仅是在组件的 methods 中提交 mutations。可以看出来实际上是设计vuex的时候为了追踪state的变化，约定一定要用commit去提交mutation触发数据的变化的。你可以试一下官方的vue调试插件，叫Vue Devtools，可以直接看到组件，data，vuex等，也可以追踪变化什么的，试一下估计你就知道为什么要这么做了。
        

   ```javascript
   // 在单独构建的版本中辅助函数为 Vuex.mapState
        import { mapState } from 'vuex'
        
        export default {
        // ...
        computed: mapState({
            // 箭头函数可使代码更简练
            count: state => state.count,
        
            // 传字符串参数 'count' 等同于 `state => state.count`
            countAlias: 'count',
        
            // 为了能够使用 `this` 获取局部状态，必须使用常规函数
            countPlusLocalState (state) {
            return state.count + this.localCount
            }
        })
     }
   ```
   ```javascript
    
//使用对象展开符
...mapState({
      topNav: state => state.topNav.data, //将 this.topNav 映射为  this.$store.topNav.data
      navigationInfo: state => state.topNav.navigationInfo
    }),
   ```

Getter：从state基本数据派生出的数据 （在Store仓库里，state就是用来存放数据，若是对数据进行处理输出，比如数据要过滤，一般我们可以写到computed中。但是如果很多组件都使用这个过滤后的数据，比如饼状图组件和曲线图组件，我们是否可以把这个数据抽提出来共享？这就是getters存在的意义。getters可以对state里面的数据进行计算操作，它就是state的计算属性。虽然组件内也可以做计算属性，但是getters可以在多个组件之间复用，如果一个状态只在一个组件内使用，可以不用使用getters。）

   1、 可以通过属性访问：
   ```javascript

        getters: {
        // ...
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        }
    }

        //可以在任何组件访问到getter里面的属性 
        computed: {
        doneTodosCount () {
            return this.$store.getters.doneTodosCount
        }
    }


   ```

   2、可以通过方法访问
   通过让getter返回一个函数，来实现给getter传参，在对store里面的数组进行查找元素的时候就非常有用。

   ```javascript
        getters: {
            // ...
            getTodoById: (state) => (id) => {
                return state.todos.find(todo => todo.id === id)
            }
        }

        store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }
   ```

  3、辅助函数  mapGetters
    mapGetters辅助函数仅仅是将store里面的getter映射到局部计算属性。

    ```javascript
        import { mapGetters } from 'vuex'

        export default {
        // ...
            computed: {
            // 使用对象展开运算符将 getter 混入 computed 对象中
                ...mapGetters([
                'doneTodosCount',
                'anotherGetter',
                // ...
                ])
            }
        }
    ```

Mutation：更改vuex的store中的状态唯一的方法就是 提交mutation。而且必须是同步的，如果需要使用异步就要使用action。
         每个mutation都会有一个字符串的事件类型(type)和一个回调函数(handler),这个回调函数就是我们实际进行更新数据的地方，他会接受state作为第一个参数，第二参数是荷载（大部分情况下是一个对象。）
         你不能直接调用一个 mutation handler。这个选项更像是事件注册：“当触发一个类型为 increment 的 mutation 时，调用此函数。”要唤醒一个 mutation handler，你需要以相应的 type 调用 store.commit 方法：

    ```javascript
    
        const store = new Vuex.Store({
            state: {
                count: 1
            },
            mutations: {
                //无提交荷载
                increment(state) {
                    state.count++
                }
                //提交荷载
                incrementN(state, obj) {
                state.count += obj.n
                }
            }
        })
        
        //组件中调用
        //无提交荷载
        store.commit('increment')
        //提交荷载
        store.commit('incrementN', {
            n: 100
        })
    ```

    
    Mutation遵循vue的响应式原则
    1、提前在store中初始化所有的属性
    2、当需要在对象上添加属性的时候，需要使用到
        Vue.set(obj,'newPro',123)
        或者使用新对象替换老对象，利用对象展开运算符：
        state.obj = { ...state.obj, newProp: 123 }

    可以使用辅助函数mapMutations
    在组件的methods里面进行使用
    你可以在组件中使用 this.$store.commit('xxx') 提交 mutation，或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）

    ```javascript
    import { mapMutations } from 'vuex'

    export default {
    // ...
    methods: {
            ...mapMutations([
            'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

            // `mapMutations` 也支持载荷：
            'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
            ]),
            ...mapMutations({
            add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
            })
        }
    }

```
    必须是同步函数,异步函数需要使用到下面的action

action：Action类似于Mutation，但是有区别
        Action提交的是mutation，而不是直接更改状态
        Action可以进行异步操作，然后通过commit提交Mutation
        Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。

        ```javascript
        actions: {
        increment ({ commit }) {
            commit('increment')
        }
        }

        ```
        分发action
         通过store.dispatch方法触发。

         ```javascript
         store.dispatch('increment')
         ```

         Action同样支持荷载和对象方式触发

         ```javascript
         // 以载荷形式分发
            store.dispatch('incrementAsync', {
            amount: 10
            })

            // 以对象形式分发
            store.dispatch({
            type: 'incrementAsync',
            amount: 10
            })
         ```    

         辅助函数mapAction
         你在组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）：

         ```javascript
         import { mapActions } from 'vuex'

            export default {
            // ...
                methods: {
                    ...mapActions([
                    'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

                    // `mapActions` 也支持载荷：
                    'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
                    ]),
                    ...mapActions({
                    add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
                    })
                }
            }
         ```

MOdule：使用单一状态树，导致应用的所有状态集中到一个很大的对象。但是，当应用变得很大时，store 对象会变得臃肿不堪。
        为了解决以上问题，Vuex 允许我们将 store 分割到模块（module）。每个模块拥有自己的 state、mutation、action、getters、甚至是嵌套子模块——从上至下进行类似的分割： 

        ```javascript
        import Vuex from 'vuex';
        import topNav_store from "./topNav/store.js";
        import member_store from "./member/store.js";
        import game_store from "./coupon/game.js";
        import approval from './approval/store.js'
        import setRentInfo from './contract/store.js'
        export default new Vuex.Store({
            modules:{
                topNav:topNav_store,
                memberStore:member_store,
                game_store:game_store,
                approval:approval,
                setRentInfo
            }
        })
        ```