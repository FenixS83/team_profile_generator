module.exports = {

employeeQuestions : [
    {
        type: `list`,
        name: `addEmployee`,
        message: `Would you like to add an employee?`,
        choices: [`Manager`, `Engineer`, `Intern`, `None`],
    }
],


managerQuestions : [
    {
        type:"input",
        name: "name",
        message: "What is the team manager's name?",
        // Validation here npm documentation npmjs.com
        
    },

    {
        type: "input",
        name: "id",
        message: "What is the team manager's id?"
        // Validation here
    },

    {
        type: "input",
        name: "email",
        message: "What is the team manager's email?",
        // Validation here
    },

    {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
        // Validation here
    }
],

engineerQuestions : [
    {
        type:"input",
        name: "name",
        message: "What is the engineer's name?",
        // Validation here npm documentation npmjs.com
        
    },

    {
        type: "input",
        name: "id",
        message: "What is the engineer's id?"
        // Validation here
    },

    {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
        // Validation here
    },

    {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
        // Validation here
    }
],

internQuestions : [
    {
        type:"input",
        name: "name",
        message: "What is the intern's name?",
        // Validation here npm documentation npmjs.com
        
    },

    {
        type: "input",
        name: "id",
        message: "What is the intern's id?"
        // Validation here
    },

    {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
        // Validation here
    },

    {
        type: "input",
        name: "school",
        message: "What school did the intern attend?",
        // Validation here
    }
]






}