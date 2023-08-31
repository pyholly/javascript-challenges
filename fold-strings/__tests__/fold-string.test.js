const foldString = require("../fold-string");

describe("foldString", () => {
  test("should return a string", () => {
    expect(typeof foldString("code")).toBe("string");
  });
  test("should return a string", () => {
    expect(foldString("")).toBe("");
  });
  test("when passed 2 letter word, should return the same word", () => {
    expect(foldString("is")).toBe("is");
  });
  test("when passed 4 letter word, should return the word inside out", () => {
    expect(foldString("code")).toBe("oced");
  });
  test("when passed 5 letter word, should return the word inside out", () => {
    expect(foldString("codes")).toBe("ocdse");
  });
  test("when passed 6 letter word, should return the word inside out", () => {
    expect(foldString("abcdef")).toBe("cbafed");
  });
  test("when passed 10 letter word, should return the word inside out", () => {
    expect(foldString("javascript")).toBe("savajtpirc");
  });
  test("when passed 11 letter word, should return the word inside out with middle letter not moved", () => {
    expect(foldString("Northcoders")).toBe("htroNcsredo");
  });
  test("when passed a sentence, should return the words correctly moved", () => {
    expect(foldString("javascript is cool")).toBe("savajtpirc is oclo");
  });
});
