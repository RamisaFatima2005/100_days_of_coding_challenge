//Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") 
//and converts it into an actual number type.


function representingNumber(string:string):number{
    return parseFloat(string)
}

console.log(representingNumber("789.55"))
console.log(representingNumber("19"))