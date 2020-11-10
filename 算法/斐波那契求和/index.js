function fabnace(n){
    let res = 0, top = 1, bottom = 0;
    for (let i = 0; i < n; i++) {
        res = top + bottom;
        bottom = top;
        top = res;
    }
    return res
}

var  res  = fabnace(2)
console.log(res)