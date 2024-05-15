/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;
    return function(...args){
        if(!called) {
            called = true;
            return fn(...args);
        }
    }
};
const calling = once(function(x) {
    console.log(x);
})
calling(1);
calling(2);
/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
