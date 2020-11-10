将es6装成es5 ，需要安装以下插件 
@babel/core @babel/preset-env babel-loader

js模块化
webpack-es6-Module 

1、直接通过export导出多个，可以使用import {} from '../xx' 来引入
export {
    obj1,
    obj2
}

2、想要导出一个 使用 export default = {
    xxx
}, 这种方式可使用import obd 来接受 不需要使用解构赋值形式 {} 


生产环境


开发环境

bundle.js -> bundle.[contenthash].js   contenthash会根据文件的内容改变而改变  
文件内容不变的话，文件名后面的hash就不会变，请求的url就不会变，会命中304，走缓存。
这样做能最大程度让代码文件命中http缓存，让页面加载得更快。