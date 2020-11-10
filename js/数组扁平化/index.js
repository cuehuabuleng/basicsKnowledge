// reduce
function flatten(arr) {  
    return arr.reduce((result, item)=> {
        return result.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}

var arr = [1,2,4,[1,1,2],2,4,5]
var re = flatten(arr)
console.log(re)


// toString  split
function flatten(arr) {
    return arr.toString().split(',').map(function(item) {
        return Number(item);
    })
} 


var re1 = flatten(arr)
console.log(re1)

