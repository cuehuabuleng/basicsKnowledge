

// // console.log(parseInt(num).toString(5))



// function transform(str) {
//     var num = str.split('').reverse()
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] !== "0") {
//             break;
//         } else {
//             num.splice(i, 1);
//             i--;
//         }
//     }
//     let res = num.join('')
//     return parseInt(res).toString(5)
// }


// var num = '77267'
// var res = transform(num)
// console.log(res)




function listTransform (n,oplist) {
    var res = [];
   var newoplist = oplist.map((item) => {
        return item.split(' ')
    })
    for(let i = 0; i < newoplist.length; i ++){
        let item = newoplist[i]
        if (item[0] === '1') {
            let len = Number(item[1]);
            for(let k = 0; k < len; k++){
                res.push('X')
            }
           
            res.splice(item[1],0,item[2])
            res.splice(item[1],0,'X')
            console.log(res)
        }else if(item[0] === '2'){
            res.splice(item[1],1)
        }else if(item[0] === '3'){
           var newres =  res.filter((item) => {
                return item !== 'X'
            })
            return newres.join(' ');
        }
    }
}

var n = 3;
var oplist = ['1 3 1', '2 3','2 2','3']
var res = [];
res.splice(3,0,1)
res.splice(3,1)

console.log(res)
// var res = listTransform(n ,oplist)
// console.log(res)