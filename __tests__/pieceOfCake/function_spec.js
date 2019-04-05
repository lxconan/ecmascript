describe('for function', () => {
  it('should be able to define function in function scope', () => {
    function outerFunction() {
      const myName = 'World';
      function innerFunction() {
        return `Hello ${myName}`;
      }

      return innerFunction();
    }

    const expected = 'Hello World';

    expect(outerFunction()).toEqual(expected);
  });

  it('should pass function as value', () => {
    const sayHello = () => 'Hello';

    function greeting(prefixGenerator, name) {
      return `${prefixGenerator()} ${name}`;
    }

    const expected = 'Hello World';

    expect(greeting(sayHello, 'World')).toEqual(expected);
  });

  it('should allow optional arguments for any function', () => {
    function square(x) { return x * x; }

    const expected = 36;
    expect(square(6, 'Hello', 4)).toEqual(expected);
  });

  it('should be undefined for not specified parameter', () => {
    function minus(left, right) {
      if (right === undefined) { return -left; }
      return left - right;
    }

    const expectedForSingleArgument = -5;
    const expectedForTwoArguments = 2;

    expect(minus(5)).toEqual(expectedForSingleArgument);
    expect(minus(5, 3)).toEqual(expectedForTwoArguments);
  });

  it('should specify default parameters', () => {
    function power(base, exponent = 2) {
      let result = 1;
      for (let count = 0; count < exponent; count += 1) {
        result *= base;
      }
      return result;
    }

    const expected = 16;
    expect(power(4)).toEqual(expected);
  });

  it('should not modify the original variable', () => {
    // eslint-disable-next-line prefer-const
    let guessIfIAmChanged = 'Origin';
    function transferToAnotherWord(word) {
      // eslint-disable-next-line no-param-reassign
      word = 'Changed';
      return word;
    }

    const returnValue = transferToAnotherWord(guessIfIAmChanged);

    const expectedReturnValue = 'Changed';
    const expectedWord = 'Origin';

    expect(returnValue).toEqual(expectedReturnValue);
    expect(guessIfIAmChanged).toEqual(expectedWord);
  });

  it('should modify the content of the variable', () => {
    const person = {};
    // eslint-disable-next-line no-shadow
    function addName(person, name) {
      // eslint-disable-next-line no-param-reassign
      person.name = name;
      return person;
    }

    const returnValue = addName(person, 'Bob');

    const expectedName = 'Bob';
    const expectedReturnValueName = 'Bob';

    expect(person.name).toEqual(expectedName);
    expect(returnValue.name).toEqual(expectedReturnValueName);
  });

  it('should capture local variables', () => {
    function wrapValue() {
      const localVariable = 'Hello';
      return () => localVariable;
    }

    const actual = wrapValue()();
    const expected = 'Hello';

    expect(actual).toEqual(expected);
  });

  it('should change captured variable', () => {
    let guessIfIAmChanged = 'Origin';

    function wrapValue() {
      return () => { guessIfIAmChanged = 'Changed'; };
    }

    wrapValue()();

    const expected = 'Changed';

    expect(guessIfIAmChanged).toEqual(expected);
  });

  it('should create some recursion trick', () => {
    function findSolution(target) {
      function find(current, history) {
        // eslint-disable-next-line eqeqeq
        if (current == target) { return history; }
        if (current > target) { return null; }
        return find(current + 5, `(${history} + 5)`)
          || find(current * 3, `(${history} * 3)`);
      }

      return find(1, '1');
    }

    const expected = '(((1 * 3) + 5) * 3)';
    expect(findSolution(24)).toEqual(expected);
  });
});
