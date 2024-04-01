function divideAndRemainder(dividend:number, dividor:number):{quotient:number,remainder:number}{
    let quotient= Math.floor(dividend / dividor)
    let remainder = dividend % dividor;

    return {quotient,remainder}
}

console.log(divideAndRemainder(25,3))