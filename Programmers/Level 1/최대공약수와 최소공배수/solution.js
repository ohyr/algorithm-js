function getGcd(n, m) {
  if (n % m === 0) {
      return m;
  }
  return getGcd(Math.min(n, m), Math.abs(n - m));
}

function solution(n, m) {
  const gcd = getGcd(n, m);
  return [gcd, n * m / gcd];
}