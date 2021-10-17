const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const {employeeQuestions, managerQuestions, engineerQuestions, internQuestions} = require("./src/questions");



const generateHTML = ({name, id, email, role, officeNumber, github, school}) =>

`

`;


.then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile(`index.html`, htmlPageContent, (err) =>
    err ? console.log(err) : console.log(`Successfully created index.html`)
    );
});
