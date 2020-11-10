map： 一种是键值对的数据结构，一个key对应一个value。
      优点就是查找速度快。

set： 是一组key的集合，但是不存储value。而且里面的的key无序不重复的。
数组去重用到


WeakMap与Map有两点区别：
        1、WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。
        2、WeakMap的键名所指对象，不计入垃圾回收机制。
           注意的是，WeakMap弱引用的只是键名，而不是键值。键值依然是正常引用。


     
## https://blog.csdn.net/c__dreamer/article/details/82182649