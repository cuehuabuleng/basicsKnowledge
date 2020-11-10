var lengthOfLongestSubstring = function (s) {
    if(s.length === 0){
        return 0;
    }
    if(s.length === 1){
        return 1;
    }
    var res = [],
        len = [];
    for (let i = 0; i < s.length; i++) {
        let item = s[i];
        res.push(item)
        for(let j = i + 1; j < s.length; j ++){
            if (res.indexOf(s[j]) < 0) {
                res.push(s[j]);
            } else{

                break;
            }
        }
        len.push(res.length)
        res = [];
    }
    len.sort((a, b) => {
        return b - a
    })
    return len[0]
};

var s = "abdfgsdjighdfjikghsegruyiriwetguy"
var res = lengthOfLongestSubstring(s)
console.log(res)