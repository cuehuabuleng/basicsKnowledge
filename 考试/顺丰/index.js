
function formateStr(str) {
    var newstr = str.replace(/(^\s*)/g, '').replace(/(\s*$)/g, '')
    var arr = newstr.split('');
    for (let i = 0; i < arr.length; i++) {
        switch (true) {
            case arr[i] === '+':
                arr.splice(i, 0, ' ');
                i++
                arr.splice(i + 1, 0, ' ');
                i++;
                break;
            case arr[i] === '-':
                arr.splice(i, 0, ' ');
                i++
                arr.splice(i + 1, 0, ' ');
                i++;
                break;
            case arr[i] === '=':
                arr.splice(i, 0, ' ');
                i++
                arr.splice(i + 1, 0, ' ');
                i++;
                break;
            case arr[i] === '*':
                arr.splice(i, 0, ' ');
                i++
                arr.splice(i + 1, 0, ' ');
                i++;
                break;
            case arr[i] === '/':
                arr.splice(i, 0, ' ');
                i++
                arr.splice(i + 1, 0, ' ');
                i++;
                break;
            case arr[i] === '%':
                arr.splice(i, 0, ' ');
                i++
                arr.splice(i + 1, 0, ' ');
                i++;
                break;
            case arr[i] === '&':
                arr.splice(i, 0, ' ');
                i++
                arr.splice(i + 1, 0, ' ');
                i++;
                break;
            case arr[i] === '|':
                arr.splice(i, 0, ' ');
                i++
                arr.splice(i + 1, 0, ' ');
                i++;
                break;
            case arr[i] === '^':
                arr.splice(i, 0, ' ');
                i++
                arr.splice(i + 1, 0, ' ');
                i++;
                break;
            case arr[i] === '<':
                arr.splice(i, 0, ' ');
                i++
                arr.splice(i + 1, 0, ' ');
                i++;
                break;
            case arr[i] === '>':
                arr.splice(i, 0, ' ');
                i++
                arr.splice(i + 1, 0, ' ');
                i++;
                break;

            case arr[i] === ';' && i !== arr.length - 1:
                arr.splice(i + 1, 0, ' ');
                i++;
                break;
            case (arr[i] === '(' || arr[i] === '{') && i !== 0:
                arr.splice(i, 0, ' ');
                i++;
                break;
            case (arr[i] === ')' || arr[i] === '}') && i !== 0:
                arr.splice(i + 1, 0, ' ');
                i++;
                break;
            default:
                break;
        }
    }

    var newStr = arr.join('')
    return newStr;

}

var str = 'for(int i=0;i<=a[10];++i){}'
var res = formateStr(str)
console.log(res)