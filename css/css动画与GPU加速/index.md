一、使用css属性的left、top等来控制元素位置和使用transform来控制元素位置的区别。

用transform中的translate来代替lef和top，动画会很流畅，渲染也会很流畅。因为transform不会触发浏览器的repaint，而let和top会一直触发repaint。因为transform动画是有GPU控制的，支持硬件加速，并不需要软件方面的渲染。

二、硬件加速工作原理：
浏览器接收到html文档之后，会将文档中的标记语言解析为DOM树。DOM树和css结合后形成浏览器构建页面的渲染树了。渲染树中包含了大量的渲染元素，每个渲染元素都会分到一个图层中，每个图层都会被加载到GPU形成渲染纹理，而图层在GPU中，transform是不会触发repaint的，类似3D绘图功能，最终这些使用transform的图层由独立的合成器进程处理。


三、浏览器什么时候会创建一个独立的复合图层：

   3D或者 css transform
   <vidoe>和<canvas>标签
   CSS fillter
   元素覆盖时候 z-index


3D 和 2D transform 的区别就在于，浏览器在页面渲染前为3D动画创建独立的复合图层，而在运行期间为2D动画创建。动画开始时，生成新的复合图层并加载为GPU的纹理用于初始化 repaint。然后由GPU的复合器操纵整个动画的执行。最后当动画结束时，再次执行 repaint 操作删除复合图层。

原文: https://www.w3cplus.com/css3/introduction-to-hardware-acceleration-css-animations.html 



四、触发GPU渲染元素

    以下css属性可以触发GPU硬件加速

    transform
    opacity
    filter
