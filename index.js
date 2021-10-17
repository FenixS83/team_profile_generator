const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const {managerQuestions, internQuestions} = require("./src/questions");


menu = () => {
    createManager = async () => {
   const answers = await inquirer.prompt(managerQuestions);
   console.log(answers);
   const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
   console.log(manager)

    
    
    };
    createManager();
};


menu();




