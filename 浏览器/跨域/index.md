什么是跨域：

因为浏览器有个同源策略：限制从一个源加载的文件如何与另外一个源的文件的交互。用于隔离恶意文件的安全机制。

1、源三个部分：端口、域名、协议。一旦有一个不一样，就属于跨域
2、一个源无法去操作另外一个源的文档：体现在：
    Cookie、localStorege和indeDB无法获取
    无法获取和操作dom
    无法进行Ajax请求，（只适合同源策略）

解决跨域的方法：

1、JSONP，
2、websocket
3、nginx反向代理
4、cors
5、postMessage


JSONp的实现原理：
利用script标签去获取跨域的信息。在scr里面传入一个自定义的回调参数  callback=resData  ,后端就向这个参数里面传递需要传递的数据(json格式)，前端就可以使用这个callback接收到后端传过来的参数了。

cors:
“CORS为什么支持跨域的通信？”
跨域时，浏览器会拦截Ajax请求，并在http头中加Origin。

在cors里，cookie有时候传不过去后端：
    前端需要设置 withCredentials为true
    后端：1、设置Access-Control-Allow-Credentials为true
          2、不允许 Access-Control-Allow-Origin: *，必须指定明确的、与请求网页一致的域名