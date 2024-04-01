let price1 = [1100,1800,6000];
let price2 = [1400,1300,1900];
let combined = [...price1, ...price2].sort ((a,b) => a - b);
console.log(combined)