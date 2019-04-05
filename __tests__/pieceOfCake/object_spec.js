describe('for object', () => {
  it('should access property via dot or bracket', () => {
    const person = { name: 'Bob' };

    const expectedName = 'Bob';

    expect(person.name).toEqual(expectedName);
    // eslint-disable-next-line dot-notation
    expect(person['name']).toEqual(expectedName);
  });

  it('should get undefined if property is not defined', () => {
    const person = { name: 'Bob' };

    const expected = undefined;

    expect(person.whatTheHellIsThat).toEqual(expected);
  });

  it('should remove object property using delete operator', () => {
    const person = { name: 'Bob' };

    delete person.name;

    expect(person.name).toBeUndefined();
  });

  it('should be able to find all the keys', () => {
    const person = {
      name: 'Bob', yearOfBirth: 2019,
    };

    const expected = ['name', 'yearOfBirth'];

    expect(Object.keys(person)).toEqual(expected);
  });

  it('should create object with braces expression', () => {
    const person = {
      name: 'Bob',
      // eslint-disable-next-line object-shorthand, func-names
      greeting: function () { return `Hello, I am ${this.name}`; },
    };

    person.name = 'John';

    expect(person.greeting()).toEqual('Hello, I am John');
  });
});
