const Intern = require(`../lib/Intern`)

//Intern requires school

test(`Successfully instantiates instance of Intern Class`, () => {
    const intern = new Intern();
    expect(typeof(intern).toBe(`object`));
})

test(`Successfully set a school via constructor arguements`, () => {
    const school = `MJHS`;
    const intern = new Intern(school);
    expect(intern.school).toBe(`string`);
})
