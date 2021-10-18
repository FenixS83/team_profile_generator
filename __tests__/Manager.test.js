const Manager = require(`../lib/Manager`)
//Manager contains officeNumber
describe(`Manager`, () =>{

    test(`Successfully instantiates instance of Manager Class`, () => {    
        const manager = new Manager();
        expect(typeof(manager)).toBe(`object`);
    });

    test(`Successfully set a manager object via constructor arguements`, () => {   
        const manager = new Manager(`Huston`, 4, `huston@huston.com`, 413);
        expect(typeof(manager.name)).toBe(`string`);
        expect(typeof(manager.id)).toBe(`number`);
        expect(typeof(manager.email)).toBe(`string`);
        expect(typeof(manager.officeNumber)).toBe(`number`);
    }); 

    test(`Successfully set a name via constructor arguements`, () => {  
        const name = `Huston`;
        const manager = new Manager(name);
        expect(manager.name).toEqual(`Huston`);
    });

    test(`Successfully set an id via constructor arguements`, () => {   
        const id = 4;
        const manager = new Manager(`Huston`, id, `huston@huston.com`, 413);
        expect(manager.id).toBe(id);
    });

    test(`Successfully set an email via constructor arguements`, () => {
        const email = `huston@huston.com`;
        const manager = new Manager(`Huston`, 4, email, 413);
        expect(manager.email).toBe(email);
    });

    test(`Should create OfficeNumber via constructor arguements`, () => {
        const officeNumber = 413;
        const manager = new Manager(`Huston`, 4, `huston@huston.com`, officeNumber);
        expect(manager.officeNumber()).toBe(officeNumber);
    });

    test(`Should get the role of the Manager`, () => {
        const manager = new Manager(`Huston`, 4, `huston@huston.com`, 413);
        expect(manager.getRole()).toBe(`Manager`);
    });

    test(`Should get the OfficeNumber using getOfficeNumber()`, () => {
        const manager = new Manager(`Huston`, 4, `huston@huston.com`, 413);
        expect(manager.getOfficeNumber()).toBe(413);
    });

});