/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let counter = 1;
    for(let i=1;i<nums.length;i++) {
        if(nums[i-1] != nums[i]) {
            nums[counter] = nums[i];
            counter+=1;
        }
    }
    return counter;
};
