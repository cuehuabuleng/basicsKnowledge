const data = [
    {
        name: 'a',
        children: [
            { name: 'b', children: [{ name: 'e' }] },
            { name: 'c', children: [{ name: 'f' }] },
            { name: 'd', children: [{ name: 'g' }] },
        ],
    },
    {
        name: 'a2',
        children: [
            { name: 'b2', children: [{ name: 'e2' }] },
            { name: 'c2', children: [{ name: 'f2' }] },
            { name: 'd2', children: [{ name: 'g2' }] },
        ],
    }
]

// 深度遍历, 使用递归
// function getName(data, list) {
//     for (let i = 0; i < data.length; i++) {
//         if (data[i] && data[i].name) {
//             list.push(data[i].name)
//             var children = data[i].children || [];
//             getName(children, list)
//         }
//     }
//     return list;
// }

// 深度遍历，非递归

// function getName(data = []){
//     var res = [];
//     var list = [];
//     list = data.reverse();
//     while(list.length > 0){
//         let item = list.pop();
//         res.push(item.name);
//         let children = item.children || [];
//         for (let i = children.length - 1; i >= 0; i--) {
//             list.push(children[i])
//         }
//     }
//     return res;
// }
// console.log(getName(data))


// // 广度遍历, 非递归
// function getName2(data = []) {
//     let res = [],
//         list = [];
//     list = data || [];
//     while (list.length !== 0) {
//         var item = data.shift();
//         res.push(item.name);
//         let children = item.children || [];
//         for (let i = 0; i < children.length; i++) {
//             list.push(children[i])
//         }
//     }
//     return res;
// }
// console.log(getName2(data))

function getName2(data = []) {
    let res = [],
        list = [];
    list = data;
    while (list.length > 0) {
        let item = list.shift();
        res.push(item.name);
        let children = item.children || [];
        for (let i = 0; i < children.length; i++) {
            list.push(children[i])
        }
    }
    return res;
}

console.log(getName2(data))