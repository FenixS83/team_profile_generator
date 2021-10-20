// Employee test

const Employee = require('../lib/Employee');

// Employee contains name, id and email properties
describe(`Employee`, () => {


    test(`Successfully instantiates instance of Employee Class`, () => {    
        const employee = new Employee();
        expect(typeof(employee)).toBe(`object`);
    });

    test(`Successfully set a employee object via constructor arguements`, () => {   
        const employee = new Employee(`Fenix`, 1, `fenix.sampson@gmail.com`);
        expect(typeof(employee.name)).toBe(`string`);
        expect(typeof(employee.id)).toBe(`number`);
        expect(typeof(employee.email)).toBe(`string`);
    }); 

    test(`Successfully set a name via constructor arguements`, () => {  
        const name = `Fenix`;
        const employee = new Employee(name);
        expect(employee.name).toEqual(`Fenix`);
    })

    test(`Successfully set an id via constructor arguements`, () => {   
        const id = 1;
        const employee = new Employee(`Fenix`, id, `fenix.sampson@gmail.com`);
        expect(employee.id).toBe(id);
    });

    test(`Successfully set an email via constructor arguements`, () => {
        const email = `fenix.sampson@gmail.com`;
        const employee = new Employee(`Fenix`, 1, email);
        expect(employee.email).toBe(email);
    });

    test(`Should get the role of the Employee`, () => {
        const role = new Employee(`Fenix`, 1, `fenix.sampson@gmail.com`);
        expect(employee.getRole()).toBe(`Employee`);
    });

    test(`Should get the name using getName()`, () => {
        const getName =new Employee(`Fenix`, 1, `fenix.sampson@gmail.com`);
        expect(employee.getName()).toBe(`Fenix`);
    });

    test(`Should get the ID using getID()`, () => {
        const getID = new Employee(`Fenix`, 1, `fenix.sampson@gmail.com`);
        expect(employee.getID()).toBe(1);
    });

    test(`Should get the email using the getEmail()`, () =>{
        const getEmail = new Employee(`Fenix`, 1, `fenix.sampson@gmail.com`);
        expect(employee.getEmail()).toBe(`fenix.sampson@gmail.com`);
    });

});