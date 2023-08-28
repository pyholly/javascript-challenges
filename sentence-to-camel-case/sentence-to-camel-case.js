function sentenceToCamelCase(sentence, bool) {
  const camelCasedArr = sentence.split(" ").map((word) => {
    if (bool) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      bool = true;
      return word.charAt(0).toLowerCase() + word.slice(1);
    }
  });

  const camelStr = camelCasedArr.join("");
  return camelStr;
}

function camelToEnglish(string) {
  const arr = [];

  string.split("").forEach((l, index) => {
    if (/[A-Z]/.test(l) && index !== 0) {
      arr.push(" ", l.toLowerCase());
    } else if (/[a-z]/.test(l) && index === 0) {
      arr.push(l.toUpperCase());
    } else {
      arr.push(l);
    }
  });

  return arr.join("") + ".";
}

module.exports = { sentenceToCamelCase, camelToEnglish };
