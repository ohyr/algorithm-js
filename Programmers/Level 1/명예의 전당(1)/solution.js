function solution(k, score) {
  const answer = [];
  const hof = [];
  for (let i = 0; i < score.length; i++) {
    hof.push(score[i]);
    hof.sort((a, b) => a - b);
    if (hof.length > k) {
      hof.shift();
    }
    answer.push(hof[0]);
  }
  return answer;
}
