const defineWord = (obj) => {
  console.log(obj);
  return `
  ${obj.word}\n
  1. ${obj.meanings[0].definitions[0].definition}\n
  2. ${
    obj.meanings[0].definitions.length > 1
      ? obj.meanings[0].definitions[1].definition
      : "second definition n/a"
  }\n
  3. ${
    obj.meanings[0].definitions.length > 2
      ? obj.meanings[0].definitions[2].definition
      : "third definition n/a"
  }\n
  -${obj.meanings[0].partOfSpeech}`;
};

export default defineWord;
