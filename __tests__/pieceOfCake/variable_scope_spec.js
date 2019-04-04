describe('for variable scopes', () => {
  it('should have function scope for var varaible', () => {
    // eslint-disable-next-line vars-on-top, no-var, no-empty
    for (var i = 0; i <= 5; i += 1) { }

    const expected = 6;

    // eslint-disable-next-line block-scoped-var
    expect(expected).toEqual(i);
  });

  it('should have block scope for let and const variable', () => {
    // eslint-disable-next-line prefer-const
    let i = 1000;
    // eslint-disable-next-line no-empty, no-shadow
    for (let i = 0; i <= 5; i += 1) { }

    const expected = 1000;

    // eslint-disable-next-line no-undef
    expect(expected).toEqual(i);
  });
});
