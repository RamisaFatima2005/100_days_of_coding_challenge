function assignGrade(marks) {
    if (marks >= 90) {
        return "A+";
    }
    else if (marks >= 80) {
        return "A";
    }
    else if (marks >= 70) {
        return "B+";
    }
    else if (marks >= 60) {
        return "B";
    }
    else if (marks >= 50) {
        return "C";
    }
    else if (marks >= 40) {
        return "D";
    }
}
console.log(assignGrade(94));
console.log(assignGrade(89));
console.log(assignGrade(77));
console.log(assignGrade(65));
console.log(assignGrade(52));
console.log(assignGrade(46));
