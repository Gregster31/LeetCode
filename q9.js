/**
 * @param {string} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // q: CHeck if x is same from back to front
    // a: using stack
    // a2: using loop
    // a3: using built-in functions

    let num = x.toString()
    // Splits the num in array, reverse it, then join it again
    .split('')
    .reverse()
    .join('')

    return num === x.toString()

};
