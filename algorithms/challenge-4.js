function highestSum(x, y) {
  let i = 0;
  let j = 0;
  let sumX = 0;
  let sumY = 0;
  for (i = 0; i <= x.length - 1; i++) {
    sumX += x[i];
  }
  for (j = 0; j <= y.length - 1; j++) {
    sumY += y[j];
  }
  if (sumX > sumY) {
    return sumX;
  } else {
    return sumY;
  }
}

module.exports = highestSum;
