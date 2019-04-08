export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (start === end) return [];
  const step = start > end ? -1 : 1;

  const array = [];
  for (let i = start; i !== end; i += step) {
    array.push(i);
  }

  return array;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (numbers === undefined) { return 0; }
  if (numbers.length === 0) { return 0; }
  return numbers.reduce((prev, current) => prev + current);
}
