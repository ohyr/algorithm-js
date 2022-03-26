function count(n) {
  let rst = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      rst++;
    }
  }

  return rst;
}

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    if (count(i) % 2 == 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  return answer;
}
