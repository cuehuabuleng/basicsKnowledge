var reversePairs = function(nums) {
    let count = 0
    var mergeSort = function(nums) {
        if (nums.length == 1) {
            return nums;
        }
        let mid = Math.floor(nums.length / 2);
        let left_arr = nums.slice(0, mid);
        let right_arr = nums.slice(mid);
        return merge(mergeSort(left_arr), mergeSort(right_arr));
    };
    var  merge = function(left, right){
        let result = [];
        while (left.length > 0 && right.length > 0) {
            if (left[0] <= right[0]) {
                result.push(left.shift());
                
            } else {
                result.push(right.shift());
                count += left.length
            }
        }
        console.log(count)
        return result.concat(left).concat(right);
    }
    mergeSort(nums)
    return count
};

let arr = [3,2,3,1]
console.log(reversePairs(arr))