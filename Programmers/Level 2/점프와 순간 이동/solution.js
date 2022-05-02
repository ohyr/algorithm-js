function solution(n) {
  let k = 0;

  while (n > 0) {
    if (n % 2 === 1) {
      k += 1;
    }
    n = Math.floor(n / 2);
  }

  return k;
}
