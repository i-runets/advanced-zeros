module.exports = function getZerosCount(number, base) {
  // your implementation
  var primeCount;
  var prime;
  for (prime = 2; prime <= base; prime++) {
    if (base % prime == 0) {
      primeCount = 0;
      while ((base % prime) == 0) {
        primeCount++
        base /= prime;
      }
    }
  }
  var zeros = 0;
  var iMax = Math.floor(Math.log(number) / Math.log(prime - 1));
  for (var i = 1; i <= iMax; i++) {
    zeros += Math.floor(number / Math.pow(prime - 1, i));
  }
  return Math.floor(zeros / primeCount)
}