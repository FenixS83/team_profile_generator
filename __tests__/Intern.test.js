const Intern = require(`../lib/Intern`)

//Intern requires school
describe(`Intern`, () =>{

    test(`Successfully instantiates instance of Intern Class`, () => {    
        const intern = new Intern();
        expect(typeof(intern)).toBe(`object`);
    });

    test(`Successfully set a intern object via constructor arguements`, () => {   
        const intern = new Intern(`Gabriel`, 3, `gabriel@gabriel.com`, `MJHS`);
        expect(typeof(intern.name)).toBe(`string`);
        expect(typeof(intern.id)).toBe(`number`);
        expect(typeof(intern.email)).toBe(`string`);
        expect(typeof(intern.school)).toBe(`string`);
    }); 

    test(`Successfully set a name via constructor arguements`, () => {  
        const name = `Gabriel`;
        const intern = new Intern(name);
        expect(intern.name).toEqual(`Gabriel`);
    });

    test(`Successfully set an id via constructor arguements`, () => {   
        const id = 3;
        const intern = new Intern(`Gabriel`, id, `gabriel@gabriel.com`, `MJHS`);
        expect(intern.id).toBe(id);
    });

    test(`Successfully set an email via constructor arguements`, () => {
        const email = `gabriel@gabriel.com`;
        const intern = new Intern(`Gabriel`, 3, email, `MJHS`);
        expect(intern.email).toBe(email);
    });

    test(`Should create School via constructor arguements`, () => {
        const school = `MJHS`;
        const intern = new Intern(`Gabriel`, 3, `gabriel@gabriel.com`, school);
        expect(intern.school()).toBe(school);
    });

    test(`Should get the role of the Intern`, () => {
        const intern = new Intern(`Gabriel`, 3, `gabriel@gabriel.com`, `MJHS`);
        expect(intern.getRole()).toBe(`Intern`);
    });

    test(`Should get the School username using getSchool()`, () => {
        const intern = new Intern(`Gabriel`, 3, `gabriel@gabriel.com`, `MJHS`);
        expect(intern.getSchool()).toBe(`MJHS`);
    });

});