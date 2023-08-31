function foldString(str) {
  const arr = str.split(" ");

  function reverseFunc(str) {
    const index = str.length / 2;
    const strArr = str.split("");
    if (str.length % 2 === 0) {
      let beginning = strArr.slice(0, index).reverse().join("");
      let ending = strArr.slice(index).reverse().join("");
      return beginning + ending;
    } else {
      const index1 = Math.floor(index);
      let beginning = strArr.slice(0, index).reverse().join("");
      let ending =
        `${str[index1]}` +
        strArr
          .slice(index + 1)
          .reverse()
          .join("");
      return beginning + ending;
    }
  }

  const reversed = arr.map((word) => {
    return reverseFunc(word) + " ";
  });

  const end = reversed.pop();
  reversed.push(end.slice(0, end.length - 1));
  return reversed.join("");
}

foldString("javascript is cool");

module.exports = foldString;
