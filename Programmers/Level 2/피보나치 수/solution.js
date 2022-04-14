function solution(n) {
  const fibo = [0, 1];
  for (let i = 2; i < n; i++) {
    fibo[i % 2] = (fibo[0] + fibo[1]) % 1234567;
  }
  return (fibo[0] + fibo[1]) % 1234567;
}
