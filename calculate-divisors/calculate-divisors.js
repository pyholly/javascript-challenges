// Please do not change the name of this function
function calculateDivisors(num) {
  let count = 0;
  for (let i = 3; i < num; i++) {
    if (i % 3 === 0) {
      count += i;
    } else if (i % 5 === 0) {
      count += i;
    }
  }
  return count;
}

module.exports = calculateDivisors;
