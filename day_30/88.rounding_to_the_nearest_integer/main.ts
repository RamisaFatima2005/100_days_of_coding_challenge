//Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input
// and returns the number rounded to the nearest integer

function  roundingNumber (number:number):number{
    return Math.round(number)
}
console.log(roundingNumber(5.8))
console.log(roundingNumber(2.5))
console.log(roundingNumber(1.2))
