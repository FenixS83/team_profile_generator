const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const {managerQuestions, engineerQuestions, internQuestions} = require("./src/questions");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


menu = () => {
    createManager = async () => {
   const answers = await inquirer.prompt(managerQuestions);
   console.log(answers);
   const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
   console.log(manager)

    };
    createManager();



    createEngineer = async () => {
    const answers = await inquirer.prompt(engineerQuestions);
    console.log(answers);
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    console.log(engineer)
    };
    createEngineer();


    createIntern = async () => {
    const answers = await inquirer.prompt(internQuestions);
    console.log(answers);
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    console.log(intern)
    };
    createIntern()
};


menu();




