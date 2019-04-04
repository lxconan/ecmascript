describe('for boolean type', () => {
  it('should convert to same type then compare for equality operator', () => {
    const objectLeft = { key: 'value' };
    const objectRight = { key: 'value' };

    const actual = [
      // eslint-disable-next-line no-self-compare, eqeqeq, yoda
      1 == 1, '1' == 1, 1 == '1', 0 == false, 0 == null, objectLeft == objectRight, 0 == undefined, null == undefined,
    ];

    const expected = [true, true, true, true, false, false, false, true];

    expect(expected).toEqual(actual);
  });

  it('should not perform type conversion for strict equal operator', () => {
    const objectLeft = { key: 'value' };
    const objectRight = { key: 'value' };

    const actual = [
      // eslint-disable-next-line no-self-compare, eqeqeq, yoda
      3 === 3, 3 === '3', objectLeft === objectRight, null === undefined,
    ];

    const expected = [true, false, false, false];

    expect(expected).toEqual(actual);
  });
});