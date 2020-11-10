// 第三题
// function strFilter(str){
//     var res = [];
//     var newStrarr =  str.split('');
//     for(let i = 0; i < newStrarr.length - 1; i ++){
//         if(newStrarr[i] === '_'){
//             i += 1;
//             while (newStrarr[i] === '_') {
//                 newStrarr.splice(i, 1)
//             }
//         }
//     }
//     console.log('2', newStrarr)
//     if (newStrarr[0] === '_') {
//         newStrarr.shift();
//     }
//     if(newStrarr[newStrarr.length - 1] === '_'){
//         newStrarr.pop();
//     }
//     res = newStrarr.join('')
//     return res;
// }

// var str = '___aaa__b____c__dd___'
// var res = strFilter(str)
// console.log(res)

// 第二题

// function arrSort(arr){
//     for(let i = 0; i < arr.length - 1; i ++){
//         for (let j = i + 1; j < arr.length; j++) {
//             if(arr[j] < arr[i]){
//                 let tem = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = tem;
//             }
//         }
//     }
//     return arr;
// }

// var arr = [25,84,21,47,15,27,68,35,20]
// var res = arrSort(arr)
// console.log(res)


// 第三题目

