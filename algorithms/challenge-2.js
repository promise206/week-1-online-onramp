function divisible(a) {
  let counter = 0;
  let i = 0;
  for (i = 0; i <= a.length; i++) {
    if (a[i] % 2 === 0 && a[i] > 15) {
      counter = counter + 1;
    }
  }
  return counter;
}

module.exports = divisible;
