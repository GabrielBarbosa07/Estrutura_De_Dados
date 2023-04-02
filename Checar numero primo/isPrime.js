function isPrime(n) {
  var divisor = 2;

  while (n > divisor) {
    if (n % divisor == 0) {
      return false;
    } else divisor++;
  }
  return true;
}

console.log(isPrime(3));
console.log(isPrime(17));
console.log(isPrime(10));
