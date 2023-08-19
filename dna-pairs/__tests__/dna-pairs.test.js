const dnaPairs = require("../dna-pairs.js");

describe("dnaPairs()", () => {
  test("test to see if passed empty string returns empty array", () => {
    const input = "";
    const output = [];
    expect(dnaPairs(input)).toEqual(output);
  });
  test("test to see if passed string length of 1, returns correct nested array", () => {
    const input = "G";
    const output = [["G", "C"]];
    expect(dnaPairs(input)).toEqual(output);
  });
  test("test to see if passed string length of 2, returns correct nested array", () => {
    const input = "AG";
    const output = [
      ["A", "T"],
      ["G", "C"],
    ];
    expect(dnaPairs(input)).toEqual(output);
  });
  test("test to see if passed string length of more than 2, returns correct nested array", () => {
    const input = "ATAG";
    const output = [
      ["A", "T"],
      ["T", "A"],
      ["A", "T"],
      ["G", "C"],
    ];
    expect(dnaPairs(input)).toEqual(output);
  });
});
