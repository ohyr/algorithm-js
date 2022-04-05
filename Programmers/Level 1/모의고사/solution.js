function solution(answers) {
  const answer = [];

  const aPattern = [1, 2, 3, 4, 5];
  const bPattern = [2, 1, 2, 3, 2, 4, 2, 5];
  const cPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let a = 0;
  let b = 0;
  let c = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === aPattern[i % aPattern.length]) {
      a += 1;
    }
    if (answers[i] === bPattern[i % bPattern.length]) {
      b += 1;
    }
    if (answers[i] === cPattern[i % cPattern.length]) {
      c += 1;
    }
  }

  const max = Math.max(a, Math.max(b, c));

  if (a === max) {
    answer.push(1);
  }
  if (b === max) {
    answer.push(2);
  }
  if (c === max) {
    answer.push(3);
  }

  return answer;
}
