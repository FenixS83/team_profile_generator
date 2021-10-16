const Employee = require('../lib/Employee');

test("Successfully instantiates instance of Employee Class", () => {
    const employee = new Employee();
    expect(typeof(employee).toBe("object"));
})

test("Successfully set a name via constructor arguements", () => {
    const name = "Dan";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
}) 