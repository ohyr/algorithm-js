function isSosu(n) {
  if (n === 1) {
    return false;
  }

  for (let i = 2; i * i <= n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i += 1) {
    if (isSosu(i)) {
      answer += 1;
    }
  }

  return answer;
}
