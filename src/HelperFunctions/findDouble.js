const doubleCheck = (array) => {
  //check for doubles
  let noDoubles = [];
  let doubles = [];
  for (let x = 0; x < array.length; x++) {
    if (!noDoubles.includes(array[x])) {
      noDoubles.push(array[x]);
    } else {
      doubles.push(array[x]);
    }
  }
  //doubles checked
  console.log("doubles:" + " " + doubles);

  //no more doubles - return clean array
  return noDoubles;
};

export default doubleCheck;
