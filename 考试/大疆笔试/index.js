// var str = read_line(), n = parseInt(read_line());
function fn(str, n){
    var arr =  str.split('');
    var len = arr.length;
    let res = [];

    function fn1() {
        if ((len - n) === 1) {
            arr.sort((a, b) => {
                return a-b;
            })
          res = arr.slice(0,1)
          return res
        }
        if ((len - n) === 2) {
            for (let i = 0; i < len; i++) {
                for (let j = i + 1; j < len; j++) {
                    res.push(`${arr[i]}${arr[j]}`)
                }
            }
            res.sort((a, b) => {
                return a- b
            })
            console.log(res)
            return res.slice(0,1)
         }else{
    
         }
    }
    var ress= fn1();
    return ress[0]

}

var str = '71245323308';
var k = 10;
var res = fn(str, k);
console.log(res)