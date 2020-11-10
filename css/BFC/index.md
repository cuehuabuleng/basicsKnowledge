BCF 全称叫做 block formating context  块级格式化上下问

---他是页面中的一块渲染区域，并且有着一套渲染规则，他决定了子元素如何定位，以及和其他元素的关系和相互作用。可以说是一个独立的布局环境，其中的元素是不受外界影响的，，并且在同一个bcf中，块盒与行盒都会垂直地沿着夫元素的边框排序。


BFC的布局规则：
    内部的Box会在垂直方向，一个接一个地放置。
    Box的垂直距离由margin决定，而且相邻的盒子会发生margin重叠。
    计算BFC高度的时候，浮动元素的高度也是计算在内的。
    BFC的区域不会与float box元素重叠
    BFC是页面上的一个独立区域，里面的子元素是不会影响到外面的元素的。

如何触发BFC：

    float不是none
    overflow不为visible
    position的值不是relative或则static
    dislay的值是inline-block、table-cell、flex、table-caption

BFC的作用：

1、清楚浮动--->给父级元素触发BFC
2、自适应两栏布局---->每个盒子margin boix 的左边都与包含块border box的左边向接触，即使浮动存在也是如痴。  右边一栏的元素触发BFC，这样就不会与左边的福鼎元素重叠。
3、避免margin重叠 ---> 两个元素的margin重叠了，就可以根据BFC的两个相邻的元素的margin会重叠，我们可以设置两个不同的bfc。
