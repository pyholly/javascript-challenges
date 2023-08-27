const changeCalculator = require("../change-calculator");

describe("changeCalculator", () => {
  test("when passed a number should return a object", () => {
    const input = 1;
    expect(typeof changeCalculator(input)).toBe("object");
  });
  test("when passed a number should not return an array", () => {
    const input = 1;
    expect(Array.isArray(changeCalculator(input))).toBe(false);
  });
  test("when passed number 1 should return correct object", () => {
    const input = 1;
    const output = { 1: 1 };
    expect(changeCalculator(input)).toEqual(output);
  });
  test("when passed number 2 should return correct object", () => {
    const input = 2;
    const output = { 2: 1 };
    expect(changeCalculator(input)).toEqual(output);
  });
  test("when passed number 7 should return correct object", () => {
    const input = 7;
    const output = { 5: 1, 2: 1 };
    expect(changeCalculator(input)).toEqual(output);
  });
  test("when passed number 13 should return correct object", () => {
    const input = 13;
    const output = { 10: 1, 2: 1, 1: 1 };
    expect(changeCalculator(input)).toEqual(output);
  });
  test("when passed number 24 should return correct object", () => {
    const input = 24;
    const output = { 20: 1, 2: 2 };
    expect(changeCalculator(input)).toEqual(output);
  });
  test("when passed number 58 should return correct object", () => {
    const input = 58;
    const output = { 50: 1, 5: 1, 2: 1, 1: 1 };
    expect(changeCalculator(input)).toEqual(output);
  });
  test("when passed number 179 should return correct object", () => {
    const input = 179;
    const output = { 100: 1, 50: 1, 20: 1, 5: 1, 2: 2 };
    expect(changeCalculator(input)).toEqual(output);
  });
  test("when passed number 225 should return correct object", () => {
    const input = 225;
    const output = { 200: 1, 20: 1, 5: 1 };
    expect(changeCalculator(input)).toEqual(output);
  });
  test("when passed number 311 should return correct object", () => {
    const input = 311;
    const output = { 200: 1, 100: 1, 10: 1, 1: 1 };
    expect(changeCalculator(input)).toEqual(output);
  });
});
