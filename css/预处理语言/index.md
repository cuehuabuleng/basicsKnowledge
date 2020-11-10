什么是css预处理器？css预处理器是用一种专门的语言，进行网页的样式设计，之后在被编译为正常的css文件，以供项目使用。

使用css预处理语言的好处:使css更加简洁、方便修改、可读性强、适应新强并且  更易于代码的维护。

less：
Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。
Less 可以运行在 Node 或浏览器端。

变量

    ```less
        @nice-blue: #5B83AD;
        @light-blue: @nice-blue + #111;
        #header {
        color: @light-blue;
        }
        //输出：
        #header {
        color: #6c94be;
        }
    ```

混入   （Mixins是一种将一组属性从一个规则集包含（“混入”）到另一个规则集的方法。）

    ```less
        .bordered {
        border-top: dotted 1px black;
        border-bottom: solid 2px black;
        }
        //我们希望在其他规则集中使用这些属性。我们只需要输入我们想要属性的类的名称，如下所示：
        #menu a {
        color: #111;
        .bordered;
        }
        .post a {
        color: red;
        .bordered;
        }
    ```