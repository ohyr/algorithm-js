function solution(s) {
  const answer = {
    min: Infinity,
    max: -Infinity,
  };

  s.split(" ").forEach((a) => {
    answer.min = Math.min(answer.min, a);
    answer.max = Math.max(answer.max, a);
  });

  return `${answer.min} ${answer.max}`;
}
