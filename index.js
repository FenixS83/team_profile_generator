const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./src/questions");


menu = () => {
    inquirer.prompt (questions.managerQuestions)
    
    .then(({name, id, email, officeNumber}) => {
        const manager = new Manager(name, id, email, officeNumber);
        console.log(manager)
    })

}


menu();