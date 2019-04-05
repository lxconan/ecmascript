'use restrict';

describe('for array', () => {
  it('should get element of an array', () => {
    const array = [1, 2, 3, 4, 5];

    const expected = 3;
    expect(array[2]).toEqual(expected);
  });

  it('should be able to push elements into array', () => {
    const array = [1, 2, 3, 4, 5];

    array.push(6, 7, 8);

    expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('should be able to spread to array elements', () => {
    const array = [1, 2, 3, 4, 5];
    const newArray = [9, ...array, 10];

    const expected = [9, 1, 2, 3, 4, 5, 10];
    expect(newArray).toEqual(expected);
  });

  it('should destruct array', () => {
    const [row, column] = [2, 3];

    const expectedRow = 2;
    const expectedColumn = 3;

    expect(row).toEqual(expectedRow);
    expect(column).toEqual(expectedColumn);
  });
});
