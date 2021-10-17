const Manager = require(`../lib/Manager`)

//Manager contains officeNumber

test(`Successfully instantiates instance of Manager Class`, () => {
    const manager = new Manager();
    expect(typeof(manager).toBe(`object`));
})

test(`Successfully set an office number via constructor arguements`, () => {
    const officeNumber = `1`;
    const manager = new Manager(officeNumber);
    expect(manager.officeNumber).toBe(`number`);
})
