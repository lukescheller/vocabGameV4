let firstLast = (word) => {
  let hint = "";
  for (let x = 0; x < word.length; x++) {
    if (x !== 0 && x !== word.length - 1) {
      hint += " _ ";
    }
    if (x == 0) {
      hint += word[x];
    }
    if (x == word.length - 1) {
      hint += word[x];
    }
  }
  return hint;
};

export default firstLast;
