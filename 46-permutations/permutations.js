/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 1) {
        return [nums];
    }

    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const rest = nums.slice(0, i).concat(nums.slice(i + 1));
        for (let p of permute(rest)) {
            result.push([current, ...p]);
        }
    }
    return result;
};