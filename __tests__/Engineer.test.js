const Engineer = require(`../lib/Engineer`)

//Engineer requires GitHub username

describe(`Engineer`, () =>{

    test(`Successfully instantiates instance of Engineer Class`, () => {    
        const engineer = new Engineer();
        expect(typeof(engineer).toBe(`object`));
    });

    test(`Successfully set a engineer object via constructor arguements`, () => {   
        const engineer = new Engineer(`Brent`, 2, `graves.brent@gmail.com`);
        expect(typeof(engineer.name)).toBe(`string`);
        expect(typeof(engineer.id)).toBe(`number`);
        expect(typeof(engineer.email)).toBe(`string`);
        expect(typeof(engineer.github)).toBe(`string`);
    }); 

    test(`Successfully set a name via constructor arguements`, () => {  
        const name = `Brent`;
        const engineer = new Engineer(name);
        expect(engineer.name).toEqual(`Brent`);
    });

    test(`Successfully set an id via constructor arguements`, () => {   
        const id = 2;
        const engineer = new Engineer(`Brent`, id, `graves.brent@gmail.com`, `grave019`);
        expect(engineer.id).toBe(id);
    });

    test(`Successfully set an email via constructor arguements`, () => {
        const email = `graves.brent@gmail.com`;
        const engineer = new Engineer(`Brent`, 2, email, `grave019`);
        expect(engineer.email).toBe(email);
    });

    test(`Should create Github username via constructor arguements`, () => {
        const github = `grave019`;
        const engineer = new Engineer(`Brent`, 2, `graves.brent@gmail.com`, github);
        expect(engineer.github()).toBe(github);
    });

    test(`Should get the role of the Engineer`, () => {
        const engineer = new Engineer(`Brent`, 2, `graves.brent@gmail.com`, github);
        expect(engineeer.getRole()).toBe(`Engineer`);
    });

    test(`Should get the Github username using getGithub()`, () => {
        const engineer = new Engineer(`Brent`, 2, `graves.brent@gmail.com`, `grave019`);
        expect(engineer.getGithub()).toBe(`grave019`);
    });

});