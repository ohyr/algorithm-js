function solution(n, t, m, p) {
  let answer = "";

  let num = 0;
  let cnt = 0;

  while (answer.length < t) {
    const cur = (num++).toString(n);
    for (let i = 0; i < cur.length; i++) {
      if (cnt++ % m === p - 1) {
        answer += cur[i];
        if (answer.length === t) {
          break;
        }
      }
    }
  }

  return answer.toUpperCase();
}
