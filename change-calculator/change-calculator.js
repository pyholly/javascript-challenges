function changeCalculator(num) {
  const arr = [200, 100, 50, 20, 10, 5, 2, 1];
  const obj = {};
  let remainder = num;

  arr.forEach((coin) => {
    if (remainder / coin >= 1) {
      obj[coin] = Math.floor(remainder / coin);
      remainder = remainder % coin;
    }
  });

  return obj;
}

module.exports = changeCalculator;
