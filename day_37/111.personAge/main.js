function ageGroup(age) {
    if (age <= 13) {
        return "Child";
    }
    else if (age <= 19) {
        return "Teenager";
    }
    else {
        return "Adult";
    }
}
console.log(ageGroup(7));
console.log(ageGroup(15));
console.log(ageGroup(25));
