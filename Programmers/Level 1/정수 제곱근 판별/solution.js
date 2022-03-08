function solution(n) {
  const x = Math.sqrt(n);
  return x - Math.floor(x) ? -1 : (x + 1) ** 2;
}
