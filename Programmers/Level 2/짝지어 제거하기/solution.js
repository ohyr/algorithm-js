function solution(s) {
  const stk = [];

  for (let i of s) {
    if (stk.length !== 0 && stk[stk.length - 1] === i) {
      stk.pop();
    } else {
      stk.push(i);
    }
  }

  return stk.length === 0 ? 1 : 0;
}
