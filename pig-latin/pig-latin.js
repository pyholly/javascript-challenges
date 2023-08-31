function pigLatin(str) {
  const pigLatinStr = str.split(" ").map((word) => {
    if (/^[^aiou]/.test(word)) {
      const index = word.search(/[aeiou]/);
      return word.slice(index) + word.slice(0, index) + "ay";
    } else {
      return word + "way";
    }
  });

  return pigLatinStr.join(" ");
}

module.exports = pigLatin;
