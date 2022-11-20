const numArray = [
  0, 1, 2, 4, 5, 8, 5, 55, 422, 55, 2, 458, 255, 8, 5, 24, 74, 25, 5, 8, 5, 58,
  5, 452,
];

function compareTo(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

console.log(numArray.sort(compareTo));
