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

  it('should destruct object', () => {
    const person = { name: 'Bob', yearOfBirth: 2019 };
    const { name } = person;

    const expected = 'Bob';
    expect(name).toEqual(expected);
  });

  it('should serialize object to JSON', () => {
    const person = { name: 'Bob', yearOfBirth: 2019 };
    const json = JSON.stringify(person);

    const expected = '{"name":"Bob","yearOfBirth":2019}';
    expect(json).toEqual(expected);
  });

  it('should parse JSON to object', () => {
    const json = '{"color":"Red","value":"#ff0000"}';
    const color = JSON.parse(json);

    const expected = { color: 'Red', value: '#ff0000' };
    expect(color).toEqual(expected);
  });

  it('should point to the object it was called on for "this" in a method', () => {
    function speak(line) {
      return `The ${this.type} rabbit says ${line}.`;
    }
    const rabbit = { type: 'white', speak };

    const expected = 'The white rabbit says Hello.';
    expect(rabbit.speak('Hello')).toEqual(expected);
  });

  it('should explitly specify this using call method', () => {
    function speak(line) {
      return `The ${this.type} rabbit says ${line}.`;
    }
    const rabbit = { type: 'white', speak };

    speak.call(rabbit, 'Hello');
    const expected = 'The white rabbit says Hello.';
    expect(rabbit.speak('Hello')).toEqual(expected);
  });

  it('should capture this in the scope around it for arrow function', () => {
    function normalize() {
      return this.coords.map(n => n / this.length);
    }

    const actual = normalize.call({ coords: [0, 10, 15], length: 5 });

    const expected = [0, 2, 3];
    expect(actual).toEqual(expected);
  });

  it('should get object prototype for an object', () => {
    const emptyObject = {};

    const expected = Object.prototype;
    expect(Object.getPrototypeOf(emptyObject)).toBe(expected);
  });

  it('should get null for object prototype\'s prototype', () => {
    const objectPrototype = Object.prototype;

    const expected = null;
    expect(Object.getPrototypeOf(objectPrototype)).toEqual(expected);
  });

  it('should be able to create object with specified prototype', () => {
    const rabbitPrototype = {
      speak(line) { return `The ${this.type} rabbit says ${line}.`; },
    };
    const killerRabbit = Object.create(rabbitPrototype);
    killerRabbit.type = 'killer';

    const words = killerRabbit.speak('SKREEEE');
    const expected = 'The killer rabbit says SKREEEE.';

    expect(words).toEqual(expected);
  });

  it('should simulate constructor using function, and use function\'s prototype as definition', () => {
    function Rabbit(type) { this.type = type; }
    // eslint-disable-next-line func-names
    Rabbit.prototype.speak = function (line) { return `The ${this.type} rabbit says ${line}.`; };

    const rabbit = new Rabbit('weird');
    const expected = 'The weird rabbit says ?_?.';

    expect(rabbit.speak('?_?')).toEqual(expected);

    const prototypeOfRabbitInstance = Object.getPrototypeOf(rabbit);
    const rabbitFunctionPrototype = Rabbit.prototype;
    const prototypeOfRabbitFunction = Object.getPrototypeOf(Rabbit);
    const functionPrototype = Function.prototype;

    const expectedPrototypeOfRabbitInstance = rabbitFunctionPrototype;
    const expectedPrototypeOfRabbitFunction = functionPrototype;

    expect(prototypeOfRabbitInstance).toBe(expectedPrototypeOfRabbitInstance);
    expect(prototypeOfRabbitFunction).toBe(expectedPrototypeOfRabbitFunction);
  });

  it('should use the class notation rather than the awkward function', () => {
    class Rabbit {
      constructor(type) { this.type = type; }

      speak(line) { return `The ${this.type} rabbit says ${line}.`; }
    }

    const rabbit = new Rabbit('white');
    const expected = 'The white rabbit says Hi.';

    expect(rabbit.speak('Hi')).toEqual(expected);
  });

  it('should overriding property of prototype for an instance', () => {
    class Rabbit {}
    const killerRabbit = new Rabbit();
    Rabbit.prototype.teath = 'small';

    const expectedKillerRabbitTeath = 'small';
    expect(killerRabbit.teath).toEqual(expectedKillerRabbitTeath);

    killerRabbit.teath = 'sharp';
    const expectedOverrideKillerRabbitTeath = 'sharp';
    const expectedRabbitPrototypeTeath = 'small';
    expect(killerRabbit.teath).toEqual(expectedOverrideKillerRabbitTeath);
    expect(Rabbit.prototype.teath).toEqual(expectedRabbitPrototypeTeath);
  });

  it('should be the same for method overriding', () => {
    class Rabbit {}
    const killerRabbit = new Rabbit();
    // eslint-disable-next-line func-names
    Rabbit.prototype.speak = function () { return 'Hi'; };

    const expectedKillerRabbitSpeak = 'Hi';
    expect(killerRabbit.speak()).toEqual(expectedKillerRabbitSpeak);

    // eslint-disable-next-line func-names
    killerRabbit.speak = function () { return '@_@'; };
    const expectedOverrideKillerRabbitSpeak = '@_@';
    const expectedRabbitPrototypeSpeak = 'Hi';

    expect(killerRabbit.speak()).toEqual(expectedOverrideKillerRabbitSpeak);
    expect(Rabbit.prototype.speak()).toEqual(expectedRabbitPrototypeSpeak);
  });
});
