function solution(s) {
  let top = 0;

  for (let a of s) {
    a === "(" ? (top += 1) : (top -= 1);
    if (top < 0) return false;
  }

  return top === 0;
}
