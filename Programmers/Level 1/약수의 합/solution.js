function solution(n) {
  let answer = n;

  for (let i = 1; i <= n / 2; i += 1) {
    if (n % i == 0) {
      answer += i;
    }
  }

  return answer;
}
