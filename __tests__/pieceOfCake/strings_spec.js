describe('for strings', () => {
  it('should get character at certain position', () => {
    const string = 'Hello';
    const characterWithinRange = string[1];
    const characterOutofRange = string[10];

    const expectedCharWithinRange = 'e';
    const expectedCharOutofRange = undefined;

    expect(characterWithinRange).toEqual(expectedCharWithinRange);
    expect(characterOutofRange).toEqual(expectedCharOutofRange);
  });

  it('should use template string to create strings', () => {
    const variable = 'World';
    const template = `Hello ${variable}`;

    const expected = 'Hello World';
    expect(template).toEqual(expected);
  });
});
