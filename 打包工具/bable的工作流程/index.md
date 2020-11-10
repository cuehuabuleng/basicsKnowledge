什么是bable：简单的来说就是可以将ECMAScript 2015+ 的代码，使它能够在旧的环境中也能够运行。 （https://babel.docschina.org/repl）

如何工作的呢：分成三步 
                一、Parse解析，将源代码转换成更加抽象的表示方法，例如抽象语法树。AST
                    这一步分为两个阶段：
                    1、词法解析：词法分析阶段可以看成是对代码进行‘分词’，它接受一段源代码，然后执行一段tokenize函数，将代码分割成Tokens的东西，是一个数组，由一些代码碎片组成，比如数字，标点，运算符号等等,如下：
                      
```javascript
                        [
                            { "type": "Keyword", "value": "const" },
                            { "type": "Identifier", "value": "add" },
                            { "type": "Punctuator", "value": "=" },
                            { "type": "Punctuator", "value": "(" },
                            { "type": "Identifier", "value": "a" },
                            { "type": "Punctuator", "value": "," },
                            { "type": "Identifier", "value": "b" },
                            { "type": "Punctuator", "value": ")" },
                            { "type": "Punctuator", "value": "=>" },
                            { "type": "Identifier", "value": "a" },
                            { "type": "Punctuator", "value": "+" },
                            { "type": "Identifier", "value": "b" }
                        ]
```

                    2、语法解析：词法解析之后，代码就变成了一个Tokens数组了，现在需要通过 语法分析，把找个数组转成AST树。

                二、Transform转换，对抽象语法树做一些特殊的处理，让它符合编译器的期望。
                    这一步的话就是操作AST树。AST树种，有很多相同的元素，他们都有一个type属性，这样的元素成为结点。一个结点通常含有若干属性，可以用域描述AST的部分信息。
                    所以操作AST树就是操作其中的节点，将这些节点进行增删改操作，从而转换成实际需要的AST。
                        例如： 就比如箭头函数是ES5不支持的语法，所以bable得将呀转换成普通函数，一层层遍历下去，找到ArrowFunctionExpression节点，这时候将它替换成FunctionDeclaration节点。

                    bable对于AST树木的遍历是深度遍历，对于AST上的每一个分支，都会先向下遍历走到尽头，然后再向上遍历退出刚遍历过的节点，然后寻找下一个分支。
                    其中bable遍历这个AST的形式是：里面会维护一个称作为Visitor的对象，这个对象定义了用于AST中获取具体节点的方法。

                三、Generate代码生成：将第二步转换过的抽象语法树，生成新的代码。
                    经过上面的两个阶段，需要转译的代码已经转换成新的AST了，最后一个阶段就是根据这个AST来输出代码。深度优先遍历。

                经过三个阶段之后bable对代码的转译完成。

