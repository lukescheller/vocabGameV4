let firstClue = (obj) => {
  let clue = "";
  let def = obj.meanings[0].definitions;
  //def.length won't work - def.length-1 works
  let range = Math.floor(Math.random() * (def.length - 1 - 0 + 1)) + 0;
  clue += def[range].definition;
  return clue;
};

export default firstClue;
