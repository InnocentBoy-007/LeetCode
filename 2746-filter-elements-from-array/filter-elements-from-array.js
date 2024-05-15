/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i],i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};
const arr = [10,20,30];
const fn = (x) => x>10;
console.log(filter(arr,fn));