什么是前端工程化：前端工程化就是将前端开发的流程、使用到的技术、工具进行一个规范化和标准化，目的就是为了提高效率和降低成本，减少一些不必要的重复工作时间。


如何做到前端的工程化： 主要有四方面  模块化、组件化、规范化、自动化。


模块化：
    js模块化  
    css模块化：vue的scope就可以很好的和js模块结合。
    <!-- 资源模块化：webpack万能模块加载理念，就是所有的资源都可以也应该模块化 -->

组件化：
    组件化和模块化的区别就是：模块化可以简单的理解为文件层面对代码的拆分；组件化可以简单的理解为就是在设计层面上，对UI界面的拆分。其实就是一种分治思想。

规范化：

    项目目录结构的制定规范
        方便定位代码和资源

    编码规范化：用Eslint（1、审查代码是否符合编码规范和统一的代码风格。 2、审查代码是否存在语法错误）
            1、html规范
            2、js规范
            3、css规范
            4、命名规范

    前后端接口的规范化
            比如：
            1、接口返回数据即显示，前端只是做渲染逻辑处理；
            2、渲染逻辑禁止跨多个接口调用；
            3、前端关注交互，渲染逻辑，避免出现复杂的接口数据处理。
            4、请求响应传输数据格式：Json，json数据尽量简单轻量，避免多级json的出现。
    
    开发文档的规范

    git规范：
        分支命名规范
        commit提交的规范

自动化：重复的东西需要交给机器去完成。
        

        
        自动打包构建、
        自动部署、





    https://www.jianshu.com/p/88ed70476adb