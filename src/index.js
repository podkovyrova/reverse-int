module.exports = function reverse (number) {
  let stringNumber = String(number);

  if (stringNumber.includes('-')) {
      stringNumber = stringNumber.slice(1);
  }

  return stringNumber.split('').reverse().join('');
}