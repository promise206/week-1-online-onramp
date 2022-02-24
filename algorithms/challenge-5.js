function replaceDivisible(x, y) {
  let i = 0;
  let index = 0;
  for (i = 0; i <= x.length; i++) {
    if (x[i] % y === 0) {
      index = x.indexOf(x[i]);
      if (index !== -1) {
        x[index] = "isDivisible";
      }
    }
  }
  return x;
}

module.exports = replaceDivisible;
