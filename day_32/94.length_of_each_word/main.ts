//Question 94: Use the .map() method to create a new array 
//that contains the length of each word from an array of words

let words = ["Television","Computer","Laptop","Car"]
let wordsLengths = words.map(word => word.length)

console.log(words)
console.log(wordsLengths)