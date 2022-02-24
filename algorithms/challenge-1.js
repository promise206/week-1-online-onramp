function noOfElements(x, y, z) {
  let counter = 0;
  let i = 0;

  for (i = 0; i <= x.length; i++) {
    if (x[i] >= y && x[i] <= z) {
      counter = counter + 1;
    }
  }
  return counter;
}

module.exports = noOfElements;
