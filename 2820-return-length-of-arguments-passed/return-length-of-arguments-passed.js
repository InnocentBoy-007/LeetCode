/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
};
const arguments = [1,2,3,"Apple"];
console.log(argumentsLength(arguments));

/**
 * argumentsLength(1, 2, 3); // 3
 */