// function matchStr(n, nameArr) {
//     var res = [];
//     var aZrex = /^[A-Za-z]/
//     var  rex1 = /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)/
//     for (let i = 0; i < nameArr.length; i++) {
//         if (aZrex.test(nameArr[i][0])) {
//             if (rex1.test(nameArr[i])) {
//                 res[i] = 'Accept'
//             }else{
//                 res[i] = 'Wrong'
//             }
//         }
//         else{
//             res[i] = 'Wrong'
//         }
//     }
//     return res
// }

// var n = 5;
// var nameArr = ['Ooook','Hhhh666','ABCD','Meituan','6666']
// var res = matchStr(n, nameArr);
// console.log(res)

// function cal (n, w_i, n_i) {
//     var res = [];
//     var  left = [];
//     var right = [];
//         for (let i = 0; i < n_i.length; i++) {
//             left = w_i.slice(0,n_i[i] - 1)
//             right = w_i.slice(n_i[i], w_i.length);
//             var countLeft = 0;
//             for (let i = 0; i < left.length; i++) {
//                 countLeft += Number(left[i])
//             }
//             var countRight = 0;
//             for (let i = 0; i < right.length; i++) {
//                 countRight += Number(right[i])
//             }
//             if (countLeft > countRight) {
//                 res.push(countLeft)
//             }else{
//                 res.push(countRight)
//             }
//             w_i[n_i[i] - 1] = 0;
//             n_i.shift();
//              i --;
//        }
//        return res;
// }

function cal (n, w_i, n_i) {
    var res = [],
        list = [],
        match = [];
    var reFn = function (w_i) {
        if (w_i.length <= 1) {
            for (let i = 0; i < list.length; i++) {
                match.push(eval(list[i].join('+')))
            }
            match.sort((a, b) => {
                return b - a;
            })
            res.push(match[i]);
            match = [];
        }else{
            for (let i = 0; i < n_i.length; i++) {
                var left = w_i.slice(0,n_i[i] - 1);
                var right = w_i.slice(n_i[i], w_i.length);
                var nextItem = w_i[n_i[i] - 1];
                list.push(left).push(right);
                for (let i = 0; i < list.length; i++) {
                    match.push(eval(list[i].join('+')))
                }
                match.sort((a, b) => {
                    return b - a;
                })
                res.push(match[i]);
                match = [];

            }
        }
    }
}

var n = 5;
var w_i = [3, 2, 4, 4, 6 ]
var n_i = [4, 3, 5, 2, 1]
var res = cal(n, w_i, n_i);
console.log(res)

// function fabnace(n){
//     let res = 0, top = 1, bottom = 0;
//     for (let i = 0; i < n; i++) {
//         res = top + bottom;
//         bottom = top;
//         top = res;
//     }
//     return res
// }

// var  res  = fabnace(0)
// console.log(res)