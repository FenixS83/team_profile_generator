const Engineer = require(`../lib/Engineer`)

//Engineer requires GitHub username

test(`Successfully instantiates instance of Engineer Class`, () => {
    const engineer = new Engineer();
    expect(typeof(engineer).toBe(`object`));
})

test(`Successfully set a GitHub username via constructor arguements`, () => {
    const github = `FenixS83`;
    const engineer = new Engineer(github);
    expect(engineer.github).toBe(`string`);
})
