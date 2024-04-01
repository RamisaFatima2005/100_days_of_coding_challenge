function twoDecimals(number1:number,number2:number):number{
    return Math.round((number1 * number2)* 100) / 100;
}
console.log(twoDecimals(0.5,0.1))