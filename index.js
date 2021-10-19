const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const colors = require(`colors`);

let employeeNames = [];
let generatedTemplate = "";
let defaultID = 1

console.log(`W E L C O M E   T O   T H E   T E A M   P R O F I L E   G E N E R A T O R`.cyan)
console.log(`Created by FenixS83`.brightYellow)
function init() {
  generateHTML();
  addTeamMember();
}

function addTeamMember() {
  inquirer.prompt([{
      type: 'input',
      name: 'name',
      message: 'What is the team members name you would like to add?'
  },

  {
      type: 'list',
      name: 'role',
      message: 'Please select the role of the team member you just added.',
      choices: [
          'Engineer',
          'Intern',
          'Manager',
      ]
  },

  {
      type: 'input',
      name: 'id',
      message: 'What is the ID number of the team member you just added?'
  },

  {
      type: 'input',
      name: 'email',
      message: 'What is the email address of the team member you just added?'
  }])

  .then(function({name, role, id, email}) {
      let employeeInfo = "";
      if (role === 'Engineer') {
          employeeInfo = 'GitHub username';
      } else if (role === 'Intern') {
          employeeInfo = 'school attended';
      } else {
          employeeInfo = 'office number'
      }

      inquirer.prompt([{
          type: 'input',
          name: 'employeeInfo',
          message: `Please enter the ${employeeInfo} of the member you just added.`
      },
  
      {
          type: 'list',
          name: 'addMoreMembers',
          message: 'Would you like to add another team member?',
          choices: [
              'yes',
              'no'
          ]
      }])

      .then(function({employeeInfo, addMoreMembers}) {
          let newTeamMember;
          if (role === 'Engineer') {
              newTeamMember = new Engineer(name, id, email, employeeInfo);
          } else if (role === 'Intern') {
              newTeamMember = new Intern(name, id, email, employeeInfo);
          } else if (role === 'Manager') {
              newTeamMember = new Manager(name, id, email, employeeInfo);
          }

          employeeNames.push(newTeamMember);
          addHTML(newTeamMember)
          .then(function() {
              if (addMoreMembers === "yes") {
                  addTeamMember();
              } else {
                  endHTML();
              }
          });
      });
  });
}

function generateHTML() {
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <title>Team Profile Generator</title>
  </head>
  
  <body>
      <nav class="navbar navbar-dark bg-danger mb-8">
          <h1 class="navbar-brand m-4 w-100 text-center">Team Profile Generator</h1>
      </nav>
      <div class="container">
          <div class="row">`;

  fs.writeFile('./dist/index.html', html, function(err) {
      if (err) {
          console.log(err);
      }
  });
  console.log('starting HTML');
}

function addHTML(teamMember) {
  return new Promise(function(resolve, reject) {
      const name = teamMember.getName();
      const role = teamMember.getRole();
      const id = teamMember.getId();
      const email = teamMember.getEmail();

      let teamData = "";
      if (role === 'Engineer') {
          const gitHubAcct = teamMember.getGithub();
          teamData = `<div class="col-sm">
          <div class="card bg-primary mx-auto my-3" style="width: 18rem">
          <h5 class="card-header text-center"><b>${name}</b><br /><br />Engineer</h5>
          <ul class="list-group list-group-flush">
              <li class="list-group-item"><b>ID: </b>${id}</li>
              <li class="list-group-item"><b>Email Address: </b>${email}</li>
              <li class="list-group-item"><b>GitHub: </b>${gitHubAcct}</li>
          </ul>
          </div>
      </div>`;
      } else if (role === 'Intern') {
          const school = teamMember.getSchool();
          teamData = `<div class="col-sm">
          <div class="card bg-primary mx-auto my-3" style="width: 18rem">
          <h5 class="card-header text-center"><b>${name}</b><br /><br />Intern</h5>
          <ul class="list-group list-group-flush">
              <li class="list-group-item"><b>ID: </b>${id}</li>
              <li class="list-group-item"><b>Email Address: </b>${email}</li>
              <li class="list-group-item"><b>School: </b>${school}</li>
          </ul>
          </div>
      </div>`;
      } else if (role === 'Manager') {
          const offNumber = teamMember.getOfficeNumber();
          teamData = `<div class="col-sm">
          <div class="card bg-primary mx-auto my-3" style="width: 18rem">
          <h5 class="card-header text-center"><b>${name}</b><br /><br />Manager</h5>
          <ul class="list-group list-group-flush">
              <li class="list-group-item"><b>ID: </b>${id}</li>
              <li class="list-group-item"><b>Email Address: </b>${email}</li>
              <li class="list-group-item"><b>Office Number: </b>${offNumber}</li>
          </ul>
          </div>
      </div>`;
      }
      console.log("adding team member");
      fs.appendFile('./dist/index.html', teamData, function (err) {
          if ( err) {
              return reject(err);
          };
          return resolve();
      });
  });
}

function endHTML() {
  const endHTML = ` </div>
  </div>
  
</body>
</html>`;

  fs.appendFile('./dist/index.html', endHTML, function(err) {
      if (err) {
          console.log(err);
      };
  });
  console.log('end of HTML');
}

init();
