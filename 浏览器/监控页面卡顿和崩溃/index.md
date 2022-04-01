页面卡顿和崩溃的区别
    卡顿：网页响应比较慢，js无法及时执行。
    崩溃：网页崩溃了，js代码无法执行。


检测页面卡顿的方法：主要是对FPS的检测。FPS是每秒的帧数。网页内容内不断变化的过程中，网页的FPS是指浏览器在渲染这些变化的帧率。帧率越高，网页越流畅。

                    方法一：直接在开发者工具查看网页的FPS。谷歌的性能工具可以查看FPS。

                    方法二：谷歌的FPS extension的方法，一个谷歌的扩展，显示当前页面的FPS。
                            原理就是通过浏览器的requestAnimationFrame API来实现的。
                            类似下面代码。

                            ```javascript

                                var lastTime = performance.now();
                                var frame = 0;
                                var lastFameTime = performance.now();
                                var loop = function(time) {
                                    var now =  performance.now();
                                    var fs = (now - lastFameTime);
                                    lastFameTime = now;
                                    var fps = Math.round(1000/fs);
                                    frame++;
                                    if (now > 1000 + lastTime) {
                                        var fps = Math.round( ( frame * 1000 ) / ( now - lastTime ) );
                                        frame = 0;    
                                        lastTime = now;    
                                    };           
                                    window.requestAnimationFrame(loop);   
                                }
                            ```
                    其实就通过requestAnimationFrame API来定时执行一些js代码，然后就可以通过这段代码的输出来知道页面的帧率。因为requestAnimationFrame就是跟随着浏览器的帧率来执行的。通过这种方式就可以知道实现监控页面的卡顿。

                    
监控页面崩溃的方法： 一、基于service worker的崩溃统计方案
                    1、Service有自己独立的工作线程，与网页区分开，网页崩掉了，Serveice一般情况下是不会崩溃的。
                    2、Service Worker生命周期一般比网页要长，可以监听网页的状态。
                    3、网页可以通过navigator.serviceWorker.controller.postMessage API来向掌管自己的SW发送信息。
                    于是我们可以实现一种基于心跳检测的监控方案。

                    p1、网页加载之后，通过postMessage API每5秒给sw发送一个心跳，标识自己在线，sw将在线的网页登记下来，并且更新登记的时间。
                    p2、网页在beforeunload时，通过postMassage API告知自己已经正常关闭，sw将登记的网页清除。
                    p3、如果网页在运行中crash了，sw中的running状态不会被清除，更新时间停留在崩溃的最后一次心跳；
                    sw：每十秒就会查看一次登记中的网页，如果发现登记的时间超过了一定时间，即可判定改网页crash了。


                    二、load和beforeunload
                        这个方案巧妙的利用了页面崩溃无法触发 beforeunload 事件来实现的。
                        在页面加载时（load 事件）在 sessionStorage 记录 good_exit 状态为 pending，如果用户正常退出（beforeunload 事件）状态改为 true，如果 crash 了，状态依然为 pending，在用户第2次访问网页的时候（第2个load事件），查看 good_exit 的状态，如果仍然是 pending 就是可以断定上次访问网页崩溃了！

                        但这个方案有问题：
                        采用 sessionStorage 存储状态，但通常网页崩溃/卡死后，用户会强制关闭网页或者索性重新打开浏览器，sessionStorage 存储但状态将不复存在；
                        如果将状态存储在 localStorage 甚至 Cookie 中，如果用户先后打开多个网页，但不关闭，good_exit 存储的一直都是 pending，完了，每有一次网页打开，就会有一个 crash 上报。







https://blog.csdn.net/u011001084/article/details/81166925?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase