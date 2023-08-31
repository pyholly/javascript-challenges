const pigLatin = require("../pig-latin");

describe("pigLatin", () => {
  test("should return a string", () => {
    expect(typeof pigLatin("northcoders")).toBe("string");
  });
  test("when passed word beginning with consonant, should end in consonant plus ay", () => {
    expect(pigLatin("northcoders")).toBe("orthcodersnay");
  });
  test("when passed word beginning with 2 consonants, should end in consonants plus ay", () => {
    expect(pigLatin("sheffield")).toBe("effieldshay");
  });
  test("when passed word beginning with 3 consonants, should end in consonants plus ay", () => {
    expect(pigLatin("scream")).toBe("eamscray");
  });
  test("when passed word beginning with a vowel, should end in way", () => {
    expect(pigLatin("algorithm")).toBe("algorithmway");
  });
  test("when passed sentence, each word should end correctly", () => {
    expect(pigLatin("keep on coding")).toBe("eepkay onway odingcay");
  });
  test("when passed sentence, each word should end correctly", () => {
    expect(pigLatin("repeat that phrase")).toBe("epeatray atthay asephray");
  });
});
