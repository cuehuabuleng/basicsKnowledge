function CalulateMethodCount( num_money ) {
    let count = 0;
    function fn (num_money) {
        if (num_money === 1 ) {
            count = count + 1;
            return 1;
        }
        if (num_money === 2) {
            count = count + 2;
            return 2;
        }
        for (let i = 1; i <= num_money; i++) {
            count = count + CalulateMethodCount(num_money - i)
           return CalulateMethodCount(num_money - i) + count
        }
    }
   return fn(num_money);
}

var num_money = 3;
var res = CalulateMethodCount(num_money)
console.log(res)
// module.exports = {
//     CalulateMethodCount : CalulateMethodCount
// };