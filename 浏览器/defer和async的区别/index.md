defer 和async的区别
两者都是一部一部加载外部js文件 

defer: 无论是否已经加载完，都会等htnl解析完成之后再执行，然后出发DOMContentLoaded事件
       会按照script标签的顺序去执行代码。

async: async一定会在onload事件之前执行，可能在DOMContentLoaded事件之前或者之后执行。因为当html没有解析完，async脚本已经加载完毕了，就会先去执行脚本，然后再继续解析htnl文件，然后就触发DOMContentLoaded事件。 当html文件已经解析完之后，async脚本还没有加载完，就会直接触发DOMContentLoad事件。然后再执行async脚本
async脚本并不会按照顺序来执行，而是谁先加载完谁就先执行。

推荐应用场景：

async：不关新页面上的DOM，百度统计

defer：js代码依赖于页面的元素  搜索框