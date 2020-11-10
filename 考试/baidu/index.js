function func(n,m,n_list,m_list){
    var res = [],
        tem = [];
    n_list = n_list.map((item, index) => {
        return {
            value:Number(item),
            index
        }
    })
    m_list = m_list.map((item, index) => {
        return Number(item)
    })
    // 将演员心中的期望值从大到小排序
    n_list.sort((a, b) => {
        return b.value - a.value
    })
    
    for(let i = 0; i < n_list.length; i ++){
        let j = 0;
        while(j < m_list.length){
            if(Number(n_list[i].value) <= Number(m_list[j]) && tem.indexOf(j) < 0){
                tem.push(j)
                res.push({
                    num:j,
                    index:n_list[i].index
                });
                break;
            }else{
                j ++;
            }
        }
        if (j === m_list.length) {
            res.push({
                num:-1,
                index:n_list[i].index
            })
        }
    }
    res.sort((a, b) => {
        return a.index - b.index
    })
    var newres = res.map((item) => {
        return item.num != -1 ? item.num + 1 : item.num
    })
    console.log(newres)
    // let newRes = [];
    // newRes = res.map((item) => {
    //     return item !== -1 ? item + 1 : item
    // })
    // return newRes.join(' ')
}

var n = 3,m = 6;
var n_list = ['33','66','20']
var m_list = ['3','6','9','90', '30','60']
var res = func(n,m,n_list,m_list);

console.log(res)