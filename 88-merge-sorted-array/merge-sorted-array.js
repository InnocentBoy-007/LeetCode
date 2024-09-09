/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let mergedLastIndexNums1 = m+n-1;
    let lastIndexNums1 = m-1;
    let lastIndexNums2 = n-1;

    while(lastIndexNums1 >= 0 && lastIndexNums2 >=0) {
        if(nums1[lastIndexNums1] > nums2[lastIndexNums2]) {
            nums1[mergedLastIndexNums1--] = nums1[lastIndexNums1--]
        }else {
            nums1[mergedLastIndexNums1--] = nums2[lastIndexNums2--];
            // same as above
            // mergedLastIndexNums1--;
            // lastIndexNums2--; 
        }
    }
    // If there are remaining elements in nums2
    while(lastIndexNums2 >= 0) {
        nums1[mergedLastIndexNums1--] = nums2[lastIndexNums2--];
    }
};