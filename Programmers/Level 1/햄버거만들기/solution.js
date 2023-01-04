function solution(ingredient) {
  let answer = 0;
  const stk = [];

  for (const ingre of ingredient) {
    stk.push(ingre);
    if (
      stk[stk.length - 1] === 1 &&
      stk[stk.length - 2] === 3 &&
      stk[stk.length - 3] === 2 &&
      stk[stk.length - 4] === 1
    ) {
      stk.splice(-4);
      answer++;
    }
  }

  return answer;
}
