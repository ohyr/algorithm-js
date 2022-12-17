function solution(a, b, n) {
  let answer = 0;

  let rst = 0;
  while (n > 0) {
    n += rst;
    rst = n % a;
    n = Math.floor(n / a) * b;
    answer += n;
  }

  return answer;
}
