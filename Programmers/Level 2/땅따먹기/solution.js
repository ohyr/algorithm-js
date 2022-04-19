function solution(land) {
  let answer = 0;

  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      let max = 0;
      for (let k = 0; k < 4; k++) {
        if (j === k) continue;
        max = Math.max(max, land[i - 1][k]);
      }
      land[i][j] += max;
    }
  }

  for (let i = 0; i < 4; i++) {
    answer = Math.max(answer, land[land.length - 1][i]);
  }

  return answer;
}
