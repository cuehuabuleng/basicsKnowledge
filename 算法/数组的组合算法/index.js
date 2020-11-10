

// function getGroup(data, index = 0, group = []) {
//     var need_apply = new Array();
//     need_apply.push(data[index]);
//     for (var i = 0; i < group.length; i++) {
//         need_apply.push(group[i] + data[index]);
//     }
//     group.push.apply(group, need_apply);

//     if (index + 1 >= data.length) return group;
//     else return getGroup(data, index + 1, group);
// }


// 组合

// 从一个数组中取出任意个的子元素，组合起来，有多少中方法
// function getGroup (data){
//     var res = [],
//         tem = [];
//     for (let i = 0; i < data.length; i++) {
//         for (let j = 0; j < res.length; j++) {
//             tem.push(data[i] + res[j]);
//         }
//         tem.push(data[i]);
//         res.push(...tem);
//         tem = [];
//     }
//     return res
// }

// 从一个数组中取出n个数组，有多少种取法。
// function getGroup (data, n){
//     var res = [],
//         tem = [];
//     for (let i = 0; i < data.length; i++) {
//         for (let j = 0; j < res.length; j++) {
//             tem.push(data[i] + res[j]);
//         }
//         tem.push(data[i]);
//         res.push(...tem);
//         tem = [];
//     }
//     if (n === data.length) {
//         return data
//     }else{
//         return res.filter((item) => {
//             return item.length === n;
//         })
//     }
// }

function getGroup(data, n){
    var res = [];
    var tem = [];
    for(let i = 0; i < data.length; i ++){
        for (let j = 0; j < res.length; j++) {
            tem.push(data[i] + res[j])
        }
        tem.push(data[i])
        res.push(...tem)
        tem = []
    }
    return res
}
var data = ['a', 'b', 'c'];
console.log(getGroup(data, 3));