/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(obj!== null && Object.keys(obj).length === 0) {
        return true;
    }
    return false;
};