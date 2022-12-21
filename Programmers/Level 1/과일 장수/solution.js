function solution(k, m, score) {
  const n = score.length;
  const sortedScore = score.slice().sort((a, b) => b - a);

  let answer = 0;
  for (let i = m - 1; i < n; i += m) {
    answer += sortedScore[i] * m;
  }
  return answer;
}
