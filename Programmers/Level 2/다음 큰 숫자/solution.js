function cntOne(n) {
  let cnt = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      cnt += 1;
    }
    n = Math.floor(n / 2);
  }
  return cnt;
}

function solution(n) {
  let answer = n + 1;
  let nOne = cntOne(n);
  while (true) {
    if (cntOne(answer) === nOne) {
      break;
    }
    answer++;
  }
  return answer;
}
