//Question 92: Write a function to remove the last element from an array and 
//return the removed element.

function removeLastElement(string:string[]){
    return string.pop();
}
let elements = ["Bag","Watch","Umbrella","Wallet"]
console.log(removeLastElement(elements))
console.log(elements)