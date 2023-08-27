function tillAddition(cash) {
  const arr = [];

  for (const prop in cash) {
    const digit = prop.match(/\d/g).join("");
    const amount = digit * cash[prop];

    /p/.test(prop) ? arr.push(amount / 100) : arr.push(amount);
  }

  const sum = arr.reduce((a, b) => a + b, 0);
  return `£${sum}`;
}

module.exports = tillAddition;
