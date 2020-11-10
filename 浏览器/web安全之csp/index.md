什么是csp：
    csp是 Content Security Policy，内容安全策略
    在web项目中，如何让我们的页面能够只加载我允许的域名下的资源呢？那就可以配一个白名单，csp就是这么来的。 

作用： 可以削弱某些特定类型的攻击，包括跨站脚本(xss)和数据注入攻击。

meta设置：

```html
<meta http-equiv="Content-Security-Policy" content="CSP指令">
```

http响应头设置

```javascript
    response: {
        Content-Security-Policy: "CSP指令"
    }
```