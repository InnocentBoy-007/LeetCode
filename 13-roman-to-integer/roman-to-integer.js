/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman_integers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;

    for(let i=0;i<s.length;i++) {
        const current = s[i];
        const next = s[i+1];
        if(current in roman_integers) {
            if(next && roman_integers[next]>roman_integers[current]) {
                result-=roman_integers[current];
            }
            else {
                result+=roman_integers[current];
            }
        }
        else {
            return undefined;
        }
    }
    return result;
};