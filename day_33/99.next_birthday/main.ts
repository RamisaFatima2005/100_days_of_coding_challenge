//Question 99: Generate a date object representing your next birthday and log it to the console.

function nextBirthday(month:number,date:number){
    const currentDate = new Date ();

    let year = currentDate.getFullYear();

    const nextBirthdayDate = new Date(year,month -1,date);

    if(nextBirthdayDate < currentDate){
        nextBirthdayDate.setFullYear(year + 1);
    }
    return nextBirthdayDate;
}
const nextBirthdayDate = nextBirthday(1,30);
console.log("Next birthday on ", nextBirthdayDate.toLocaleDateString());