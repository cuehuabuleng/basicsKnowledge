var  str = 'hello world !'
// 方法一,直接遍历字符串，倒序输出
let res = '';
for (let i = str.length - 1; i >= 0; i--) {
    res = res + str[i]
}
console.log('方法一', res)

// 方法二  split ，unshift(在数组前端添加元素)
let newStrarr = [],
    strArr = [],
    res1 = '';
    strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        newStrarr.unshift(strArr[i])
    }
    for (let i = 0; i < newStrarr.length; i++) {
        res1 = res1 + newStrarr[i]
    }
    console.log('方法二',res1)

    // 方法三split、revserse
    let res2 = str.split('').reverse().join('');
    console.log('方法三', res2)

    //方法四 charAt
    let res3 = '';
    for (let i = str.length; i >= 0; i--) {
        res3 = res3 + str.charAt(i)
    }
    console.log('方法四', res3)