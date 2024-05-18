/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim(); // remove leading and trailing spaces
    if(s.length > 0) {
        const words = s.split(" ");
        const last_word = words[words.length - 1];
        return last_word.length;
    }
};