function twoSums (arr, target) {
    var res = [];
    let i = arr.length;
    while(i > 0){
        let item = arr.pop();
        let tem = target - item;
        if(arr.indexOf(tem) > -1){
            res.push(arr.indexOf(tem), arr.length);
            break;
        }
        i--;
    }
    return res;
}

var arr = [2,7,11,5]
var target = 9;
var res = twoSums(arr, target);
console.log(res)