export default function flattenArray(array) {
  if (array === undefined || array === null) {
    throw new Error('Flatten undefined or null array');
  }

  if (array.length === 0) { return []; }

  return array.reduce((prev, current) => {
    const prevArray = Array.isArray(prev) ? prev : [prev];
    const currentArray = Array.isArray(current) ? current : [current];
    return prevArray.concat(currentArray);
  });
}
