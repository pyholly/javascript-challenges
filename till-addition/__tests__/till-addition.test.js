const tillAddition = require("../till-addition");

describe("tillAddition", () => {
  test("passed empty object, returns empty string", () => {
    const input = {};
    expect(tillAddition(input)).toBe("£0");
  });
  test("should return a string with layout of £0.00", () => {
    const input = { "1p": 1 };
    expect(tillAddition(input)).toBe("£0.01");
  });
  test("should return string of sum of 2 coins", () => {
    const input = { "1p": 1, "2p": 1 };
    expect(tillAddition(input)).toBe("£0.03");
  });
  test("should return string of sum of a few coins with higher value", () => {
    const input = { "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1, "50p": 1 };
    expect(tillAddition(input)).toBe("£0.88");
  });
  test("should return string with sum of highest value coins", () => {
    const input = { "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1, "£2": 1 };
    expect(tillAddition(input)).toBe("£3.85");
  });
  test("should return string with sum of coins and notes", () => {
    const input = {
      "5p": 1,
      "10p": 1,
      "20p": 1,
      "50p": 1,
      "£1": 1,
      "£2": 1,
      "£5": 1,
      "£10": 1,
      "£20": 1,
      "£50": 1,
    };
    expect(tillAddition(input)).toBe("£88.85");
  });
  test("should return string with sum of multiple values of coins and notes", () => {
    const input = {
      "10p": 2,
      "20p": 4,
      "50p": 2,
      "£2": 10,
      "£50": 4,
    };
    expect(tillAddition(input)).toBe("£222");
  });
});
