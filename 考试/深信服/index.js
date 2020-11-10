//颜色16进制
function chansform(str) {
    var colorStr = str.replace('#', '');
    var rex = /^[0-9]/
    console.log()
    if (colorStr.length !== 3 || colorStr.length !== 6) {
        return str;
    } else if (rex.test(colorStr)) {
        return str
    }
    return colorStr
}

// var str = readline();
// var res = chansform(str);
// print(res)

var str = '#ffffff'
var res = chansform(str);
console.log(res)