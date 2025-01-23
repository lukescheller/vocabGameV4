const scrambleWord = (word) => {
  let strArray = Array.from(word);
  for (let i = 0; i < strArray.length - 1; ++i) {
    let j = Math.floor(Math.random() * strArray.length);
    // Swap letters
    let temp = strArray[i];
    strArray[i] = strArray[j];
    strArray[j] = temp;
  }
  return strArray.join(" ");
};

export default scrambleWord;
