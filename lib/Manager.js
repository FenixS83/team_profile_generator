const Employee = require("./Employee");

class Manager {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;