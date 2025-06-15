const defineWord = (obj) => {
  //get all definitions from each array
  let def = [];
  obj.meanings.forEach((d) => {
    d.definitions.forEach((m) => {
      def.push(m.definition);
    });
  });
  //create string to be displayed
  let str = `${obj.word} \n`;
  for (let x = 0; x < def.length; x++) {
    str += `${x + 1}. ${def[x]} \n`;
  }
  return str;
};

export default defineWord;
