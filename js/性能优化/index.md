性能优化的原则：
多用内存、缓存或者其他的办法
减少cup计算量，减少网络加载耗时
----用空间换时间

1、加载更快
    压缩代码，webpack-production打包  服务端 Gzip 配置ngixn， 大小减为原来的额三分一，然后浏览器端负责解析。
    减少访问次数：合并代码， srr服务端渲染，缓存
    CND静态资源加载
2、渲染更快

    css放在head，js放在body最下面
    尽早执行js，使用DOMContentLoaded触发
    懒加载--图片懒加载
    对DOM查询进行缓存   
    频繁操作dom可以合并到一起插入Dom结构   documentFramement
    节流防抖
