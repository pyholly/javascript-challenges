// DNA Pairs Challenge

function dnaPairs(dna) {
  const dnaChars = dna.split("");

  return dnaChars.map((char) => {
    if (char === "G") {
      return [char, "C"];
    } else if (char === "C") {
      return [char, "G"];
    } else if (char === "A") {
      return [char, "T"];
    } else {
      return [char, "A"];
    }
  });
}

module.exports = dnaPairs;
