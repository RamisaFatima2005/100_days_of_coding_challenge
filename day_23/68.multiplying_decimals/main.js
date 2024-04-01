"use strict";
function twoDecimals(number1, number2) {
    return Math.round((number1 * number2) * 100) / 100;
}
console.log(twoDecimals(0.5, 0.1));
