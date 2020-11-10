// b站笔试

// function versionSort(arr){

//     arr.sort((a, b) => {
//         return a - b;
//     })
//     return arr
// }


// var res = versionSort(arr);
// console.log(res)
// var arr = ["2.1.0", "1.5", "2", "0.10.0"]
// // 转换后
// var arrObj = [
//     {
//         old: '2.1.0',
//         new: 2100
//     }, {
//         old: '1.5',
//         new: 1500
//     }, {
//         old: '2',
//         new: 2000
//     }, {
//         old: '0100',
//         new: 0100
//     },
// ]
// arrObj.sort((a, b) => {
//     if (a.new > b.new) {
//         return 1
//     } else {
//         return -1
//     }
// })
// console.log(arrObj)
// function lessN(num){
//     let count = 0;
//     return function countFn () {
//         for (let i = 1; i <= num; i++) {
//             if (i*i === num) {
//                  count = 1;
//             }
//         }
//         if (!count) {
//             for (let i = 1; i <= num; i++) {
//                 for (let j = 1; j <= num; j++) {
//                     if ((j*j + i*i) === num) {
//                         count =2;
//                     }
//                 }
//             }
//         }
//         if (!count) {
//             for (let i = 1; i <= num; i++) {
//                 for (let j = 1; j <= num; j++) {
//                     for (let k = 1; k < num; k++) {
//                         if ((i*i + j*j + k*k) === num) {
//                             count = 3;
//                         }else{
//                             count = 0;
//                         }
//                     }
//                 }
//             }
//         }
//         return count;
//     }

// }

// var number = 13
// var res = lessN(number);
// console.log(res())

