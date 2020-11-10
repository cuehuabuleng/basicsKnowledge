
/*请完成下面这个函数，实现题目要求的功能
当然，你也可以不按照下面这个模板来作答，完全按照自己的想法来 ^-^ 
******************************开始写代码******************************/
// function divingBoard(a, b, k) {
//     let res = [],
//         len = 0;
//     if (k === 0) {
//         len = 0;
//         res.push(len)
//     }else if (k > 0) {
//         for (let i = 0; i <= k; i++) {
//             len = i*a + (k-i)*b;
//             res.push(len)
//         }
//     }
//     res.sort((a, b) => {
//         return a - b;
//     })
//     // 数组去重
//     for (let i = 0; i < res.length; i++) {
//         if (res[i] === res[i+1]) {
//             res.splice(i,1);
//             i --;
//         }
//     }
//     return res
// }
// /******************************结束写代码******************************/



// var res = [];
// var a = 1,
//     b = 5,
//     k = 19;
// res = divingBoard(a, b, k);
console.log( '[' + res + ']')

// var res; 
  
// var _a = parseInt(read_line());var _b = parseInt(read_line());var _k = parseInt(read_line());
// res = divingBoard(_a, _b, _k);
// res_temp = "";
// for(var res_i=0; res_i < res.length; res_i++) {
//     res_temp = res_temp + res[res_i]+" ";
// }
// print(res_temp);


时间限制： 3000MS
内存限制： 589824KB
题目描述：
在业务系统中，通常会执行多个任务，各个任务之间存在一定的依赖关系，我们称之为任务节点。每一个节点会设计一个最大的超时时间，如果发生超时现象，那么中断该路径的后续操作。

现在需要计算一个流程的最大执行时间。



项目执行从HEAD开始。如果节点执行结束后，没有后续需要执行的任务节点，那么以END作为结束。

*提示：如上图所示，执行TaskC最长需要50ms，TaskD最长需要80ms，如果TaskD执行发生了超时，那么TaskC + TaskD最长需要消耗130ms的时间。此题中，不需要考虑超时的场景。每个节点的最大执行时间等于超时时间，仅需要计算各个路径中的超时时间之和即可。


*注意：需要检查输入的合法性，如果输入不合理，节点定义错误等异常场景，输出结果为-1

*注意：无需进行闭环间测



输入描述
输入和题干中的内容一致

系统从HEAD开始，每一个节点用“|”分割，每一个节点的信息用“`”分割，如果存在多个子节点例如ABC，用“,”分割。

例如：

HEAD`0`A,B,C|A`20`END表示，这是一个开始节点，他执行时间需要0ms，接下来可以同时执行A,B, C三个子任务节点。

A任务节点，最大执行时间需要20ms，没有需要执行的后续节点

输出描述
如图所示，ABC相互之间没有依赖，可以并行执行，但是DE需要等待C执行完成才可以开始执行。最大执行时间应该为：

timeout(C) + timeout(E) = 200ms。

timeout(C) + timeout(D) + timeout(F) = 160ms。

timeout(B) = 100ms

timeout(A) = 20ms

所以最大值为 200ms


样例输入
 HEAD`0`A,B,C|A`20`END|B`100`END|C`50`D,E|D`80`F|E`150`END|F`30`END
样例输出
200

提示
可以参考代码模板中的代码，来构建数据结构。必要时对代码进行一些调整，以提高系统健壮性