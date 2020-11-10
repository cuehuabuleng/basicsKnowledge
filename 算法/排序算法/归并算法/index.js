//归并排序

//判断 合并 

function merge(left, right) {
    let result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left).concat(right);
}

//拆分
function mergeSort(nums) {
    if (nums.length == 1) {
        return nums;
    }
    let mid = Math.floor(nums.length / 2);
    let left_arr = nums.slice(0, mid);
    let right_arr = nums.slice(mid);
    return merge(mergeSort(left_arr), mergeSort(right_arr));
}

var arr = [2, 5, 3, 4];
console.log(mergeSort(arr))