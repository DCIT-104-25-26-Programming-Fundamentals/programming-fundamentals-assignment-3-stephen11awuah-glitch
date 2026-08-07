// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
//
// Build a console-based program that stores and manages student information.
// Each student is represented as a JavaScript object containing:
//
//   - name   : the student's full name  (string)
//   - id     : a unique student ID number (number, e.g. 20240001)
//   - scores : an array of scores from multiple assessments (e.g. [75, 88, 90])
//
// Example object:
//   { name: "Alice Mensah", id: 20240001, scores: [78, 85, 90] }
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_08_student_records.js
//
// -----------------------------------------------------------------------------
// FEATURES YOUR PROGRAM MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Add a Student
//      - Ask the user to enter the student's name and ID.
//      - Ask how many scores to enter, then collect each score one by one.
//      - Save the student object and confirm it was added.
//
//   2. Display All Students
//      - Print a formatted table showing every student's:
//          Name, ID, individual scores, and their average score.
//      - If no students have been added yet, print a message saying so.
//
//   3. Calculate Average Score for a Specific Student
//      - Ask the user to enter a student ID.
//      - Find the student and print their average score.
//      - If the ID is not found, print an error message.
//
//   4. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ================================
//      STUDENT RECORD SYSTEM MENU
//   ================================
//   1. Add student
//   2. Display all students
//   3. Calculate average score
//   4. Quit
//   Enter your choice (1-4):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Enter your choice (1-4): 1
//   Student name: Alice Mensah
//   Student ID: 20240001
//   How many scores? 3
//   Enter score 1: 78
//   Enter score 2: 85
//   Enter score 3: 90
//   Student "Alice Mensah" added successfully.
//
//   Enter your choice (1-4): 3
//   Enter student ID: 20240001
//   Alice Mensah's average score: 84.33
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Store all student records in an array of objects.
// - Average scores must be displayed to 2 decimal places (use .toFixed(2)).
// - Each feature MUST be in its own function (see scaffold below).
// - Handle invalid menu choices and missing student IDs gracefully.
//

// =============================================================================
class StudentRecords {
  constructor() {
    this.records = [];
  }

  // Add a new student
  addStudent(id, name, score) {
    if (!id || !name || score < 0 || score > 100) {
      return "Invalid student data";
    }
    this.records.push({ id, name, score });
    return `Student ${name} added successfully.`;
  }

  // Update a student's score
  updateScore(id, newScore) {
    let student = this.records.find(s => s.id === id);
    if (!student) return "Student not found";
    if (newScore < 0 || newScore > 100) return "Invalid score";
    student.score = newScore;
    return `Score updated for ${student.name}.`;
  }

  // Remove a student
  removeStudent(id) {
    let index = this.records.findIndex(s => s.id === id);
    if (index === -1) return "Student not found";
    let removed = this.records.splice(index, 1);
    return `Student ${removed[0].name} removed.`;
  }

  // Display all student records
  showRecords() {
    if (this.records.length === 0) return "No student records available.";
    return this.records
      .map(s => `${s.id} - ${s.name} : ${s.score}`)
      .join("\n");
  }

  // Calculate average score
  averageScore() {
    if (this.records.length === 0) return "No records to calculate average.";
    let sum = this.records.reduce((acc, s) => acc + s.score, 0);
    return sum / this.records.length;
  }
}



// =============================================================================


