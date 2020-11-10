兼容性：
    vue2对ie8以下的都不兼容
    因为vue.x中的object.defineProperty是es5中无法shim的一个特性，所以vue2.x不支持ie8或者更低版本的浏览器。
    shim是什么，看图片 

    vue3使用了es6中的proxy代替了object.defineProperty，proxy  好像只能兼容ie11+