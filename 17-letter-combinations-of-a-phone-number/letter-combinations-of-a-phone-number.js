/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const values = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    };

    let result = [];

    if (digits === "") {
        return result;
    }

    else if (digits.length < 1 || digits.length > 10) {
        return undefined;
    }

    if (digits.length === 1) {
        return values[digits];
    }

    for (let i = 0; i < digits.length; i++) {
        let currentDigit = digits[i];

        if (i === 0) {
            for (let letter of values[currentDigit]) {
                result.push(letter);
            }
        } else {
            let tempResult = [];
            for (let letter of values[currentDigit]) {
                for (let combination of result) {
                    tempResult.push(combination + letter);
                }
            }
            result = tempResult;
        }
    }

    return result;
};