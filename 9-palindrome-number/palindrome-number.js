/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x<0 ? false : x === Number(x.toString().split("").reverse().join(""));
};

