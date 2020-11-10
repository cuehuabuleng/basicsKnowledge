首先相同之处 他们都是隐藏元素。

不同：

display:none  1、元素隐藏掉之后，不会占用原来的位置，
        
              2、将元素设置为display:none之后，还是可以使用js操作该元素：涉及到浏览器的渲染原理，首先浏览器去解析html去生成DOM Tree，解析css生成
                CSSDOM，然后将DOM Tree和cssdom结合生成渲染数Render Tree。元素再rendertree中会有对应的盒子，然后浏览器以盒子模型的信息渲染布局页面。但是设置了display：none的属性的元素，则没有在renderTree中生成相应的盒子，所以后续的布局渲染就没有他的事情了。但是还是可以进行dom操作的.
              3、原生默认display：none的元素： 
                script style等等
              4、无法响应事件
              5、在提交表单的时候，可以将display：node的input元素提交上去
              6、transition对display的变化不感冒
              7、display会引起回流

visibility:hiddend   1、元素隐藏掉后，还是会占用原来的位置
                     2、和display：none一样，不影响表单的提交
                     3、trnasition对visibility的变化有效
                     4、可以响应事件，冒泡阶段
                     5、和display：none一样无法获取焦点
                     6、不触发布局的情况下隐藏元素  
