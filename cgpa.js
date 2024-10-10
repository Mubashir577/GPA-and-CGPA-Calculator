function calculateCGPA() {
    const semesterGPA = parseFloat(document.getElementById('semesterGPA').value);
    const semesterCreditHours = parseFloat(document.getElementById('semesterCreditHours').value);
    const previousCGPA = parseFloat(document.getElementById('previousCGPA').value);
    const previousCreditHours = parseFloat(document.getElementById('previousCreditHours').value);
    
    if (!isNaN(semesterGPA) && !isNaN(semesterCreditHours) && !isNaN(previousCGPA) && !isNaN(previousCreditHours)) {
        const totalQualityPoints = (semesterGPA * semesterCreditHours) + (previousCGPA * previousCreditHours);
        const totalCreditHours = semesterCreditHours + previousCreditHours;
        const cumulativeGPA = totalQualityPoints / totalCreditHours;
        
        document.getElementById('cumulativeGPA').value = cumulativeGPA.toFixed(2);
        document.getElementById('cumulativeCreditHours').value = totalCreditHours;
    } else {
        alert("Please enter valid numbers for all fields.");
    }
}

function resetCGPAForm() {
    document.getElementById('semesterGPA').value = '';
    document.getElementById('semesterCreditHours').value = '';
    document.getElementById('previousCGPA').value = '';
    document.getElementById('previousCreditHours').value = '';
    document.getElementById('cumulativeGPA').value = '';
    document.getElementById('cumulativeCreditHours').value = '';
}

function showHelp() {
    alert("Enter the Semester GPA, Semester Credit Hours, Previous CGPA, and Previous Credit Hours. Click 'Calculate' to compute your CGPA. Click 'Reset' to clear the form.");
}
