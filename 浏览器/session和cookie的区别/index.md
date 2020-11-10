cookie和session的区别

1、cokie数据一般放在客户端，session数据放在服务端
2、cookie不安全，会被攻击
2、session存在服务器，安全


jwt和session的区别

jwt是保存在客户端，而session是保存在服务端

jwt使用base64编码将头部信息和载荷信息进行编码形成一个字符串，然后再使用hs256算法，将这个字符串记性加密，形成一个签名，把签名加在这个字符串的后面。
就是token了