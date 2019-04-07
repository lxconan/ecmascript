export function range(start, end) {
  if (start === end) return [];
  const step = start > end ? -1 : 1;

  const array = [];
  for (let i = start; i !== end; i += step) {
    array.push(i);
  }

  return array;
}

export function sum(...numbers) {
  if (numbers === undefined) { return 0; }
  if (numbers.length === 0) { return 0; }
  return numbers.reduce((prev, current) => prev + current);
}
