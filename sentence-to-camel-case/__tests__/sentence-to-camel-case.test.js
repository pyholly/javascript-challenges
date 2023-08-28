const {
  sentenceToCamelCase,
  camelToEnglish,
} = require("../sentence-to-camel-case");

describe("sentenceToCamelCase", () => {
  test("should return a string", () => {
    const input1 = "this sentence";
    const input2 = true;
    expect(typeof sentenceToCamelCase(input1, input2)).toBe("string");
  });
  test("should return an empty string", () => {
    const input1 = "";
    const input2 = true;
    expect(sentenceToCamelCase(input1, input2)).toBe("");
  });
  test("when passed a word and true, should return the word UpperCamelCase", () => {
    const input1 = "sentence";
    const input2 = true;
    const output = "Sentence";
    expect(sentenceToCamelCase(input1, input2)).toBe(output);
  });
  test("when passed a word and false, should return the word lowerCamelCase", () => {
    const input1 = "Sentence";
    const input2 = false;
    const output = "sentence";
    expect(sentenceToCamelCase(input1, input2)).toBe(output);
  });
  test("when passed sentence and true, should return the word UpperCamelCase", () => {
    const input1 = "this sentence";
    const input2 = true;
    const output = "ThisSentence";
    expect(sentenceToCamelCase(input1, input2)).toBe(output);
  });
  test("when passed sentence and false, should return the sentence UpperCamelCase", () => {
    const input1 = "this sentence";
    const input2 = false;
    const output = "thisSentence";
    expect(sentenceToCamelCase(input1, input2)).toBe(output);
  });
  test("when passed longer sentence and true, should return the sentence UpperCamelCase", () => {
    const input1 = "This Bigger strange Sentence";
    const input2 = true;
    const output = "ThisBiggerStrangeSentence";
    expect(sentenceToCamelCase(input1, input2)).toBe(output);
  });
  test("when passed longer sentence and false, should return the sentence lowerCamelCase", () => {
    const input1 = "this Bigger strange Sentence";
    const input2 = false;
    const output = "thisBiggerStrangeSentence";
    expect(sentenceToCamelCase(input1, input2)).toBe(output);
  });
});
describe("camelToEnglish", () => {
  test("when passed string, should return the sentence in English", () => {
    const input1 = "thisBiggerStrangeSentence";
    const output = "This bigger strange sentence.";
    expect(camelToEnglish(input1)).toBe(output);
  });
  test("when passed string with first letter capital, should return the correct sentence", () => {
    const input1 = "ThisBiggerStrangeSentence";
    const output = "This bigger strange sentence.";
    expect(camelToEnglish(input1)).toBe(output);
  });
});
