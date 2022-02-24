function isDivisbleByN(arr, n) {
  let i = 0;
  let newArray = [];
  for (i = 0; i <= arr.length; i++) {
    if (arr[i] % n === 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

module.exports = isDivisbleByN;
