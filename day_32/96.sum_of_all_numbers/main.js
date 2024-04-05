"use strict";
//Question 96: Demonstrate how to use the .reduce() method
// to calculate the sum of all numbers in an array.
function sumOfAllNumber(numbers) {
    return numbers.reduce((accumulator, currentval) => accumulator + currentval, 0);
}
let numbers = [5, 8, 12];
console.log(sumOfAllNumber(numbers));
