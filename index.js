const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const GenerateHTML = require("./src/GenerateHTML");
const inquirer = require("inquirer");
const fs = require("fs");
// const {employeeQuestions, managerQuestions, engineerQuestions, internQuestions} = require("./src/questions");
const Generator = require("./src/Generator");
let generatedTemplate = "";
let defaultID = 1



const starter = () => {
    inquirer .prompt([
      {
        type: 'confirm',
        message: "Would you like to add a manager?".brightGreen,
        name: 'manager',
      },
    ])
    .then(({manager}) => {
      if(manager){
        inquirer.prompt([
          {
            type: 'input',
            message: "What is the team manager's name?".brightMagenta,
            name: 'name',
            validate: (value) => {if (value){return true} else 
            {return console.log("Please enter a valid name".red.dim)}}
          },
          {
            type: 'input',
            message: "What is the team manager's employee id?".brightMagenta,
            name: 'id',
            default: defaultID
          },
          {
            type: 'input',
            message: "What is the team manager's email address?".brightMagenta,
            name: 'email',
            validate: (value) => {if (value){return true} else 
            {return console.log("Please enter a valid email address".red.dim)}}
          },
          {
            type: 'input',
            message: "What is the team manager's office number?".brightMagenta,
            name: 'office',
            validate: (value) => {if (value){return true} else 
            {return console.log("Please enter a valid office number".red.dim)}}
          }
        ])
        .then(function({name, id, email, office}) {
          let manager = new Manager(name, id, email, office);
          let generator = new Generator();
          generatedTemplate += `${Generator.manangerGenerator(manager)}`;
          menu();
        })
      } else {
        defaultID = 0;
        menu();
      }
    }) 
  }
  
  // Employee type
  const menu = () => {
    defaultID++
    inquirer.prompt([
      {
        type: 'list',
        message: "Please select a new employee or end the selection...".brightGreen,
        name: 'menu',
        choices: ["Engineer".brightBlue, "Intern".brightYellow, "End".brightRed]
      }
    ])
    .then((response) => {
      if (response.menu === "Engineer".brightBlue) {
        engineerQuesitons();
      } else if (response.menu === "Intern".brightYellow) {
        internQuestions();
      } else {
        endTeam();
      }
    })
  }
  
  // Engineer questions
  const engineerQuesitons = () => {
    inquirer.prompt([ 
      {
        type: 'input',
        message: "What is the engineer's name?".brightBlue,
        name: 'name',
        validate: (value) => {if (value){return true} else 
        {return console.log("Please enter a valid name".red.dim)}}
      },
      {
        type: 'input',
        message: "what is the engineer's employee ID?".brightBlue,
        name: 'id',
        default: defaultID
      },
      {
        type: 'input',
        message: "What is the engineer's email address?".brightBlue,
        name: 'email',
        validate: (value) => {if (value){return true} else 
        {return console.log("Please enter a valid email address".red.dim)}}
      },
      {
        type: 'input',
        message: "What is the engineer's Github username?".brightBlue,
        name: 'github',
        validate: (value) => {if (value){return true} else 
        {return console.log("Please enter a valid Github username".red.dim)}}
      }
    ])
    .then(function({name, id, email, github}) {
      let engineer = new Engineer(name, id, email, github);
      let generator = new Generator();
      generatedTemplate += `\n            ${Generator.engineerGenerator(engineer)}`
      menu();
    })
  }
  
  // Intern questions
  const internQuestions = () => {
    inquirer.prompt([ 
      {
        type: 'input',
        message: "What is the intern's name?".brightYellow,
        name: 'name',
        validate: (value) => {if (value){return true} else 
        {return console.log("Please enter a valid name".red.dim)}}
      },
      {
        type: 'input',
        message: "What is the intern's employee ID?".brightYellow,
        name: 'id',
        default: defaultID
      },
      {
        type: 'input',
        message: "What is the intern's email address?".brightYellow,
        name: 'email',
        validate: (value) => {if (value){return true} else 
        {return console.log("Please enter a valid email address".red.dim)}}
      },
      {
        type: 'input',
        message: "What school did the Intern attend?".brightYellow,
        name: 'school',
        validate: (value) => {if (value){return true} else 
        {return console.log("Please enter a valid school".red.dim)}}
      }
    ])
    .then(function({name, id, email, school}) {
      let intern = new Intern(name, id, email, school);
      let generator = new Generator();
      generatedTemplate += `\n            ${Generator.internGenerator(intern)}`
      menu();
    })
  }
  
  // Team generator finalize
  const endTeam = () => {
    const filename = `generatedTeam.html`;
    const temp = new HTMLGenerator;
    fs.writeFile("./dist/" + filename, temp.template(generatedTemplate), (err) => 
    err ? console.log(err) : 
    console.log("\n\n\nYour team has been generated in the 'dist' folder.\nThanks for using the Team Generator!".brightGreen));
  }
  
  //////////////////////////////////////RUN//////////////////////////////////////
  starter();