const calculateDivisors = require("../calculate-divisors");

describe("calculateDivisors", () => {
  test("to see if returns a number", () => {
    const input = 1;
    const output = 0;
    expect(calculateDivisors(input)).toEqual(output);
  });
  test("to see if returns correct number when there is only one multiple", () => {
    const input = 5;
    const output = 3;
    expect(calculateDivisors(input)).toEqual(output);
  });
  test("to see if returns correct number when there are 2 multiples", () => {
    const input = 6;
    const output = 8;
    expect(calculateDivisors(input)).toEqual(output);
  });
  test("to see if returns correct number when there are many multiples", () => {
    const input = 10;
    const output = 23;
    expect(calculateDivisors(input)).toEqual(output);
  });
  test("to see if returns correct number when there are many multiples", () => {
    const input = 12;
    const output = 33;
    expect(calculateDivisors(input)).toEqual(output);
  });
});
