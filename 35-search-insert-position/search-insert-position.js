/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let position = 0;
    for(let i=0;i<nums.length;i++) {
        if(nums[i] === target) {
            return i;
        }else {
            // keeps track of the current index
            if(target > nums[i]) {
                position++;
            }
        }
    }
    return position;
};