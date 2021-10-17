const Employee = require("./Employee");

class Engineer {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;