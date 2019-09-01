// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
var students = {};
var optionalSubjects = ["physics", "accounts"]
var minMarks = 5;
var maxMarks = 10;
for (var i = 0; i < 100; i++) {
    var student = {};
    //student["name"] = "student" + i;
    var grammarMarks = (Math.random() * (+maxMarks - +minMarks) + +minMarks) * 10;
    student["grammar"] = grammarMarks;
    //Selecting random subject from the two optional subjects
    var randomNumber = Math.floor(Math.random() * optionalSubjects.length);

    student[optionalSubjects[randomNumber]] = (Math.random() * (+maxMarks - +minMarks) + +minMarks) * 10;
    students["student" + i + 1] = student
}

console.log(students);
