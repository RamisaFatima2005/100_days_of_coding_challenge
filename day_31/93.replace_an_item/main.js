"use strict";
//Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
let fruits = ["Apple", "Strawberry", "Banana"];
let find = fruits.indexOf("Banana");
console.log("Before Replacement :", fruits);
if (find !== -1) {
    fruits[find] = "Mango";
    console.log("After Replacement :", fruits);
}
else {
    console.log("Banana not found");
}
