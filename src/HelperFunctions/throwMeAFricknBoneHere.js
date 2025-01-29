const throwMeAFricknBoneHere = (word) => {
  //gather all definitions
  let def = [];
  word.meanings.forEach((d) => {
    d.definitions.forEach((m) => {
      def.push(m.definition);
    });
  });
  //randomly select definition
  let random = Math.floor(Math.random() * def.length);
  return `
    First Character: ${word.word.charAt(0)}
    ${def[random]}
  `;
};

export default throwMeAFricknBoneHere;
