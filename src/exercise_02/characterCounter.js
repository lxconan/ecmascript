export default function countCharacter(string, prediction) {
  if (!string) { return 0; }
  if (string.length === 0) { return 0; }
  if (prediction === undefined) { return string.length; }

  let total = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (prediction(string[i])) {
      total += 1;
    }
  }

  return total;
}
