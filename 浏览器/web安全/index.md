xss:跨站脚本攻击
原理：通过向页面注入代码块，获取用户的cookie
防御：1、设置cookie为httponly：true；防止js脚本获取用户cookie
      2、对输入的内容进行过滤，特别对script标签进行过滤 &lt，&gt

csrf：跨站请求伪造
原理：在登陆了b网站之后，没退出，然后去访问其他的危险网站或者点击不安全连接。不需要获取到你的的cookie，但是可以使用你的身份去操作

防御：1、使用token，请求带上token进行验证，
      2、csrf是在用户不知情的情况下进行的，所以使用验证码，确认是用户在交互，

误区：不能使用以下两种方式去防御

      1、使用post防御：

      一般都是我们看到的csrf攻击的例子，都是使用通过加载一张图片<img src="xxxx“ width="0" height="0" />,触发请求里面的src连接来进行get请求操作或者通过一个恶意连接的点击，在用户不知情的情况下进行操作。其实也是可以通过post请求来实现攻击。
      在页面上注入如下代码就可以实现post请求进行攻击操作：

      ```javascript
<body onload="document.forms[0].submit()">
    <form action="xxxx" method="POST">
        <input type="hidden" name="amount" value="1500">
        <input type="hidden" name="destinationAccount" value="123456789">
    </form>
</body>
      ```

      2、使用https进行防御：https其实就是 http层+ssl层 ，https的封装其实就是将http的内容交给ssl层加密之后，再有ssl层传递给传输层，入如此下去而已，而csrf是在http层设置的，所以https是无法防御的。