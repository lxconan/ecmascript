export default function formatNumber(number, option) {
  const addDollarSign = option && option.currency;
  let formatted = number.toFixed(2);
  if (addDollarSign) { formatted = `$ ${formatted}`; }
  return formatted;
}
