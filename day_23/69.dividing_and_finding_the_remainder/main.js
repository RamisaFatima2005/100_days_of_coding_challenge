"use strict";
function divideAndRemainder(dividend, dividor) {
    let quotient = Math.floor(dividend / dividor);
    let remainder = dividend % dividor;
    return { quotient, remainder };
}
console.log(divideAndRemainder(25, 3));
