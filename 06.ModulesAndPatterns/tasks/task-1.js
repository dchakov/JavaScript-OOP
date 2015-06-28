/* Task Description */
/* 
 * Create a module for a Telerik Academy course:OK
 * The course has a title and presentations:OK
 * Each presentation also has a title:OK
 * There is a homework for each presentation:OK
 * There is a set of students listed for the course:OK
 * Each student has firstname, lastname and an ID:OK
 * IDs must be unique integer numbers which are at least 1:OK
 * Each student can submit a homework for each presentation in the course:OK
 * Create method init:OK
 * Accepts a string - course title
 * Accepts an array of strings - presentation titles
 * Throws if there is an invalid title
 * Titles do not start or end with spaces
 * Titles do not have consecutive spaces
 * Titles have at least one character
 * Throws if there are no presentations
 * Create method addStudent which lists a student for the course
 * Accepts a string in the format 'Firstname Lastname'
 * Throws if any of the names are not valid
 * Names start with an upper case letter
 * All other symbols in the name (if any) are lowercase letters
 * Generates a unique student ID and returns it
 * Create method getAllStudents that returns an array of students in the format:
 * {firstname: 'string', lastname: 'string', id: StudentID}
 * Create method submitHomework
 * Accepts studentID and homeworkID
 * homeworkID 1 is for the first presentation
 * homeworkID 2 is for the second one
 * ...
 * Throws if any of the IDs are invalid
 * Create method pushExamResults
 * Accepts an array of items in the format {StudentID: ..., Score: ...}
 * StudentIDs which are not listed get 0 points
 * Throw if there is an invalid StudentID
 * Throw if same StudentID is given more than once ( he tried to cheat (: )
 * Throw if Score is not a number
 * Create method getTopStudents which returns an array of the top 10 performing students
 * Array must be sorted from best to worst
 * If there are less than 10, return them all
 * The final score that is used to calculate the top performing students is done as follows:
 * 75% of the exam result
 * 25% the submitted homework (count of submitted homeworks / count of all homeworks) for the course
 */

function solve() {
    var Course = {
        init: function(title, presentations) {
            this.title = title;
            this.presentations = presentations;
            this.students = [];
            return this;
        },
        addStudent: function(name) {
            var names = name.split(' ');
            if (names.length !== 2) {
                throw new Error('Invalid Student name');
            }
            validateStudentName(names[0]);
            validateStudentName(names[1]);
            var studentID = this.students.length + 1;
            this.students.push({
                firstname: names[0],
                lastname: names[1],
                id: studentID
            });
            return studentID;
        },
        getAllStudents: function() {
            return this.students.slice();
        },
        submitHomework: function(studentID, homeworkID) {
            if (this.students.length < studentID || studentID <= 0) {
                throw new Error('Invalid studentID');
            }
            if (this.presentations.length < homeworkID || homeworkID <= 0) {
                throw new Error('Invalid homeworkID');
            }
        },
        pushExamResults: function(results) {},
        getTopStudents: function() {}
    };

    Object.defineProperty(Course, 'title', {
        get: function() {
            return Course._title;
        },
        set: function(title) {
            validateTitle(title);
            Course._title = title;
        }
    });

    Object.defineProperty(Course, 'presentations', {
        get: function() {
            return Course._presentations;
        },
        set: function(argument) {
            if (!argument.length) {
                throw new Error('No presentations');
            }
            argument.forEach(function (title) {
                validateTitle(title);
            })
            Course._presentations = argument;
        }
    });

    function validateStudentName(name) {
        if (!/^[A-Z][a-z]*/.test(name)) {
            throw new Error('Invalid name');
        }
    }

    function validateTitle(title) {
        if (!title.length) {
            throw new Error('Not a valid title');
        }
        if (title[0] === ' ' || title[title.length - 1] === ' ') {
            throw new Error('Not a valid title');
        }
        if (/[\s]{2,}/.test(title)) {
            throw new Error('Not a valid title');
        }
    }

    return Course;
}

module.exports = solve;

var course = solve();
var telerik = Object.create(course)
    .init('Modules and Patterns', ['ww', 'rt']);
telerik.addStudent("Asen Nikolov");
console.log(telerik.getAllStudents());
console.log(telerik.title);
console.log(telerik.presentations);
