外边距重叠存在的意义
段落p之间的间距就不会产生双倍的就距离

可能有两种情况：一是一个外层元素包裹着一个元素，外层元素与内元素的外边距重叠。二是两个垂直的元素的外边距重叠

如何解决：

外层使用padding来代替
另外一个元素设置overflow：hiden 触发bfc

内层元素绝对定位 position：absolute
内层元素设置透边框 border
分别套一个div
display:inline-block


