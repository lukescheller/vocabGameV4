const only20 = (array) => {
  let words20 = [];
  for (let x = 0; x < 20; x++) {
    words20.push(array[x]);
  }
  console.log(words20);
  return words20;
};

export default only20;
