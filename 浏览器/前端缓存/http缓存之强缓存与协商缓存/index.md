先是强缓存：
状态码：200
字段：catch-contral(单位：秒)  expires（单位：分钟）
必须是先获取到资源，然后根据返回来的信息告诉浏览器如何进行缓存。强制缓存还是协商缓存。

expires:HTTP1.0使用的是这个字段。服务器第一次返回资源的时候，在响应头会携带这个字段，值是一个过期的时候，浏览器下次再次请求这个资源的时候，服务端就会检查这个时间点，看看是否已经过期，如果不过期就直接去缓存中读取，不用服务端返回，如果过期的话，就不会命中强制缓存，就会走协商缓存。

cache-control:HTTP1.1 使用的是这个字段，跟上面的expires是一样的，只不过不同的是，这个字段的值是一个过期时长。
              对应的属性有：max-age--最长的过期时间
                           public---代表可以被浏览器和代理服务器缓存
                           immutable--代表资源永远不变，但是资源是会变的，设置他的目的是为了用户刷新浏览器之后不去重新请求服务器。
                           no-cache--设置了之后就不走强缓存了， 发请求就直接去请求服务器，走协商缓存。
                           no-store--不会让客户端缓存，服务端也不会缓存。直接不缓存，协商缓存也不走。


协商缓存：
状态码：304
字段： Etag/if-None-Match last-modified/if-modified-since
当强缓存设置的时间或者时长失效的时候，浏览器就会去访问服务器请求资源， 这时候就可以设置协商缓存了。

last-modified：这个字段是服务端第一次返回资源给客户端的时候，在响应头设置上的，代表这服务端资源文件的最后一次修改的时间。当客户端再次发送请求的时候，就会将这个时间值放到if-lastmodified-since这哥字段上，然后服务器根据这个值进行判断文件资源是否修改过。修改过了就重新返回新的，没有修改过就返回状态码304，告诉客户端直接去缓存读取。
Etag：这个字段和上面的last-modified是基本是一样的，但是区别就是，这个字段是一个标识，是服务端对文件的内容产生的一个标识（hash值），每当文件改变的时候，这个标识就会发生改变。然后，当客户端请求资源文件的时候，会将这个标识放在if-none-match字段发送给服务端，服务端对此进行比较。如果不一样的话就说明过期了，重新返回资源，如果一样就返回304，走缓存

两个字段的区别：
1、lastmodified保存的是服务器文件最后一次修改的时间，Etag保存的是一个文件标识。
2、Etag比较准确一点，因为如果编辑了文件内容，但是内容却没有发生改变，这时候就会造成缓存失败， 而且这个last-modified能够感知的时间单位是一秒，如果在 
 一秒钟内修改了文件的话，他就不会感知到，就无法向客户端发送最新的资源。
3、由于Etag是使用MD5算法来计算的，性能上比不过last-modified

需要注意的一点是，etag在资源分布式储存的时候，如果使用服务器自带的etag模块，每台机器生成的etag的值会不一样。  如果想要保证相同的话，就需要自己去实现一个etag的hash算法。



优先级：

1、Expires和cache-contral，如果两者同时存在的话，那以cache-contral为准

2、etag和last-moidified同时存在的话那就需要同时满足条件才返回304，顺序就是先判断etag，再到last-modified。

    为什么优先级Etag会比last-modified高呢？
         因为last-modified只能精确到秒级 所以etag才比last-modified的优先级高。