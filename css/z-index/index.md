https://www.cnblogs.com/mawn/p/9584503.html

z-index仅在定位元素上面才有效(定义了position属性，且属性值不是static)。




层叠上下文：
    层叠上下文(stacking context)，是HTML中一个三维的概念。在CSS2.1规范中，每个盒模型的位置是三维的，分别是平面画布上的X轴，Y轴以及表示层叠的Z轴。
    HTML中的根元素<html></html>本身就具有层叠上下文，称为根层叠上下文。
    普通元素设置position并且值不为static，并且设置z-index为具体值，就会产生层叠上下文


层叠等级：


层叠顺序:
        是一种层叠规则，看图片0.png
