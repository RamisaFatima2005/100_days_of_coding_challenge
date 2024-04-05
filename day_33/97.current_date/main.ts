//Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

function currentDateObject(){
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}
console.log(currentDateObject());

function currentDate(){
    let date = new Date();

    return date.toLocaleDateString();
}
console.log(currentDate())