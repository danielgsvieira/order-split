function toCurrency(
  value: number,
  prefix: string = '$',
  decimalSeparator: string = '.',
): string {
  const formatedValue = value.toFixed(2).replace('.', decimalSeparator);
  return `${prefix} ${formatedValue}`;
}

export { toCurrency };