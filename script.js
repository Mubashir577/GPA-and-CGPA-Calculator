function calculateGPA() {
    const creditHours = document.querySelectorAll('.credit-hour');
    const marks = document.querySelectorAll('.marks');
    const grades = document.querySelectorAll('.grade');
    let totalPoints = 0;
    let totalCredits = 0;
    
    for (let i = 0; i < creditHours.length; i++) {
        const credit = parseFloat(creditHours[i].value);
        const mark = parseFloat(marks[i].value);
        const gradePoint = getGradePoint(mark);
        
        if (!isNaN(credit) && !isNaN(mark)) {
            totalCredits += credit;
            totalPoints += credit * gradePoint;
            grades[i].value = getLetterGrade(mark);
        }
    }
    
    const gpa = totalPoints / totalCredits;
    document.getElementById('semesterGPA').value = gpa.toFixed(2);
}

function getGradePoint(marks) {
    if (marks >= 85) return 4.0;
    if (marks >= 80 && marks <= 84) return 3.7;
    if (marks >= 75 && marks <= 79) return 3.3;
    if (marks >= 71 && marks <= 74) return 3.0;
    if (marks >= 68 && marks <= 70) return 2.7;
    if (marks >= 64 && marks <= 67) return 2.3;
    if (marks >= 60 && marks <= 63) return 2.0;
    if (marks >= 57 && marks <= 59) return 1.7;
    if (marks >= 53 && marks <= 56) return 1.3;
    if (marks >= 50 && marks <= 52) return 1.0;
    return 0.0;
}

function getLetterGrade(marks) {
    if (marks >= 85) return 'A';
    if (marks >= 80 && marks <= 84) return 'A-';
    if (marks >= 75 && marks <= 79) return 'B+';
    if (marks >= 71 && marks <= 74) return 'B';
    if (marks >= 68 && marks <= 70) return 'B-';
    if (marks >= 64 && marks <= 67) return 'C+';
    if (marks >= 60 && marks <= 63) return 'C';
    if (marks >= 57 && marks <= 59) return 'C-';
    if (marks >= 53 && marks <= 56) return 'D+';
    if (marks >= 50 && marks <= 52) return 'D';
    return 'F';
}

function resetForm() {
    const creditHours = document.querySelectorAll('.credit-hour');
    const subjects = document.querySelectorAll('.subject');
    const marks = document.querySelectorAll('.marks');
    const grades = document.querySelectorAll('.grade');
    
    creditHours.forEach(input => input.value = '');
    subjects.forEach(input => input.value = '');
    marks.forEach(input => input.value = '');
    grades.forEach(input => input.value = '');
    
    document.getElementById('semesterGPA').value = '';
}

function showHelp() {
    alert("Enter the credit hours and marks for each subject. Click 'Calculate' to compute your GPA. Click 'Reset' to clear the form.");
}
