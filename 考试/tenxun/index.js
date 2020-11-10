// function eclispce(str, n) {
//     var rex = /[^\u4E00-\u9FA5]/;
//     var res = '';
//     var len = str.length;
//     for (let i = 0; i < str.length; i++) {
//         if (!rex.test(str[i])) {
//             len++;
//         }
//     }
//     if (len <= n) {
//         res = str;
//         return res
//     } else {
//         var m = n - 3,
//             j = 0;
//         if (!rex.test(str[j])) {
//             while (m >= 2) {
//                 res = res + str[j++];
//                 m = m - 2;
//             }
//             res = res + '...'
//             return res
//         } else {
//             while (m >= 1) {
//                 res = res + str[j++];
//                 m = m - 1;
//             }
//             res = res + '...'
//             return res
//         }
//     }
// }
// var str = '1234567890';
// var n = 7;
// var res = eclispce(str, n)
// console.log(res)



function stack(n, args) {
    var res = [];
    var stack = [];
    for (let i = 0; i < args.length; i++) {
        if (args[i].indexOf(" ") > 0) {
            args[i] = args[i].split(' ');
        }else{
            args[i] = [args[i]]
        }
        var item = args[i]
        switch (true) {
            case item[0] === 'push':
                stack.push(item[1])
                break;
            case item[0] === 'getMin':
                var tem  = [];
                for (let i = 0; i < stack.length; i++) {
                    tem[i] = stack[i]
                }
                tem.sort((a, b) => {
                    return a - b;
                })
                res.push(tem[0])
                break;
            case item[0] === 'pop':
                stack.pop();
                break;
            default:
                break;
        }
    }
    return res
}



var n = 6;
var args = [
    'push 3',
    'push 2',
    'push 1',
    'getMin',
    'pop',
    'getMin',]

var res = stack(n, args)

console.log(res);

// var n =  parseInt(readline());
// var args = [];
// for(let i = 0; i < n; i++){
//     args.push(readline())
// }