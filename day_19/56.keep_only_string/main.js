"use strict";
let mixItems = ["mango", 3, false, "sandwich", 6, true, "chocolate", 2];
let stringWords = mixItems.filter(words => typeof words === "string");
console.log(stringWords);
