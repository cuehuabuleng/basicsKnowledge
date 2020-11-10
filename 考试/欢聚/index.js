// function count(str) {
//     var len = [];
//     for(let i = 0; i < str.length; i ++){
//         for(let j = i + 1; j < str.length; j ++ ){
//             if(str[i] === str[j]){
//                 len.push(j - i - 1)
//                 break;
//             }
//         }
//     }
//     len.sort((a,b) =>{
//         return a - b;
//     })
//     return len[0]
    
// }

// var str = "是我，我是中国人，我中国人"
// var res = count(str);
// console.log(res)

function rotate(str) {
    var H = Number(str.split(":")[0]),
        M = Number(str.split(':')[1]),
        rotate = 0;
        var Mrotate = M  * 6;
        var Hrotate = H > 12 ? (H - 12) * 30 + Mrotate / 12 - 1 : H * 30 + Mrotate / 12 - 1;
        rotate = Math.floor((M  * 6) - (H > 12 ? (H - 12) * 30 + M  * 6 / 12 - 1 : H * 30 + M  * 6 / 12 - 1))
        if(rotate > 0){
            return rotate;
        }else{
            return -rotate
        }
}

var str = "05:52"
var res = rotate(str);
console.log(res)