export default function arrayToList(array) {
  if (array === undefined || array === null) {
    throw new Error('Creating list from undefined array');
  }

  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }

  let next = null;
  for (let i = array.length - 1; i >= 0; i -= 1) {
    next = { value: array[i], next };
  }

  return next;
}
