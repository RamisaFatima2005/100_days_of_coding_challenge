function squareDeclaration(number:number):number{
    return number * number;
}
const squareExpression = function(number:number):number{
    return number * number
};

console.log(squareDeclaration(6));
console.log(squareExpression(6));