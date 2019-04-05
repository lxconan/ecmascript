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
});
