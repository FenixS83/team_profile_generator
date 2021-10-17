const Employee = require('../lib/Employee');

// Employee contains name, id and email properties

test(`Successfully instantiates instance of Employee Class`, () => {
    const employee = new Employee();
    expect(typeof(employee).toBe(`object`));
})

test(`Successfully set a name via constructor arguements`, () => {
    const name = `Dan`;
    const employee = new Employee(name);
    expect(employee.name).toBe(`string`);
}) 

test(`Successfully set an id via constructor arguements`, () => {
    const id = `1`;
    const employee = new Employee(id);
    expect(employee.id).toBe(`number`);
})

test(`Successfully set an email via constructor arguements`, () => {
    const email = `email@email.com`;
    const employee = new Employee(email);
    expect(employee.email).toBe(`string`);
})