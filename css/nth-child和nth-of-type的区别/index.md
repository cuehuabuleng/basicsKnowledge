nth-child和nth-of-type的区别

:nth-child()表示父元素下的第n个子元素。比如div p:nth-child(2)表示div下的第二的元素、如果不是p元素则没有匹配的元素 　:nth-of-type()表示父元素下的第ｎ个类型的元素　比如div p:nth-of-type(2)表示div下的第二个ｐ元素。
————————————————
版权声明：本文为CSDN博主「潜行的Q」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/margin_0px/article/details/82991627


p:nth-child(n){}
找到该类元素在当前元素的第n个位置，若没有就不生效

p:nth-of-type(n){}
找到该类元素在同类元素中的第n个
