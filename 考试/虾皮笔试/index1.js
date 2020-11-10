// function compressString(str) {
//     let arr = [],
//         index,
//         flag = true,
//         len;
//     arr = str.split('');
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i + 1]) {
//             len += 1;
//             if (flag === true) {
//                 index = i;   
//             }
//             flag = false;
//         } else {
//             arr[index] = len
//             flag = true;
//          }
//     }
//     return arr.join('');
// }

// function compressString () {
//     let res = '',
//         count = 0;
//         for (let i = 0; i < str.length; i++) {
//             if (str[i] === str[i+1]) {
//                 count ++;
//             }else{
//                 if(count){
//                     res += str[i] + (count + 1)
//                 }else{
//                     res += str[i]
//                 }
//                 count = 0;
//             }
//             if (i === str.length -2) {
//                 if (str[i] === str[i+1]) {
//                     res += str[i] + (count + 1)
//                 }else{
//                     res += str[i+1]
//                 }
//             }
//         }
//         return res
// }

// function compressString (str){
//     let array = [...str];
//     let  res = '';
//     const len = array.length;
//     for (let i = 0; i < len; i++) {
//         let count = 1;
//         let index = i;
//         while(array[i] === array[i+1]){
//             count ++;
//             i ++;
//         }
//         if (count !== 1) {
//             res = res + count + array[index];
//         }else{
//             res += array[index]
//         }
//     }
//     return res
// }


// var str = 'qcccccascssssc'
// var res = compressString(str);
// console.log(res)



function findeVersion(versionArr, version) {
    let versionNewArr;
    switch (true) {
        case version[0] === '~':
            var version = version.replace('~', '');
            versionNewArr = version.split('.');
            var newArr = [],
                arr = [],
                res;
            for (let i = 0; i < versionArr.length; i++) {
                var versionItem = versionArr[i].split('.');
                if (versionItem[0] === versionNewArr[0] && versionItem[1] === versionNewArr[1]) {
                    newArr.push({
                        item: versionItem,
                        index: i
                    });
                }
            }
            if (newArr.length === 0) {
                return 'invalid'
            } else {
                newArr.forEach((item, index) => {
                    arr.push(item.item[2]);
                })
                arr.sort((a, b) => {
                    return a - b;
                })
                newArr.forEach((item, index) => {
                    if (item.item[2] === arr[arr.length - 1]) {
                        res = versionArr[item.index]
                    }
                })
                return res
            }
            break;
        case version[0] === "^":
            version = version.replace('^', '');
            versionNewArr = version.split('.');
            var newArr = [],
                arr1 = [],
                arr2 = [],
                res;
            for (let i = 0; i < versionArr.length; i++) {
                var versionItem = versionArr[i].split('.');
                if (versionItem[0] === versionNewArr[0]) {
                    newArr.push({
                        item: versionItem,
                        index: i
                    });
                }
            }
            if (newArr.length === 0) {
                return 'invalid'
            } else {
                newArr.forEach((item, index) => {
                    arr1.push(item.item[1]);
                    arr2.push(item.item[2])
                })
                arr1.sort((a, b) => {
                    return a - b;
                })
                arr2.sort((a, b) => {
                    return a - b;
                })
                newArr.forEach((item, index) => {
                    if (item.item[2] === arr2[arr2.length - 1] && item.item[1] === arr1[arr1.length - 1]) {
                        res = versionArr[item.index]
                    } else {
                        res = 'invalid'
                    }
                })
                return res
            }
            break;
        default:
            if (versionArr.indexOf(version) >= 0) {
                return versionArr[versionArr.indexOf(version)];
            } else {
                return 'invalid'
            }
            break;
    }
}

var versionArr = ["1.2.3", "2.0.1", "2.1.1", "1.1.4"]
var version = "^1.2.3"

var res = findeVersion(versionArr, version)
console.log(res)

// var str = readline()
// var res = compressString(str);
// print(res)

// var rex = /[a-z]/i
// console.log(rex.test('a'))
// var a =['a','d','d']
// console.log(a.join(''))

// function reverseOnlyLetters(str = '') {
//     let arr = [],
//         noStrarr = [],
//         newArr = [];
//     var rex = /[a-z]/i;
//     arr = str.split('');

//     for (let i = 0; i < arr.length; i++) {
//         if (!rex.test(arr[i])) {
//             noStrarr.push({
//                 value:arr[i],
//                 index:i
//             })
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (!rex.test(arr[i])) {
//             arr.splice(i, 1)
//         }
//     }
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i])
//     }
//     for (let i = 0; i < noStrarr.length; i++) {
//         newArr.splice(noStrarr[i].index, 0, noStrarr[i].value)
//     }
//     return newArr.join('')
// }
// var str = "Test1ng-Leet=code-Q!"
// var res = reverseOnlyLetters(str)
// console.log(res)