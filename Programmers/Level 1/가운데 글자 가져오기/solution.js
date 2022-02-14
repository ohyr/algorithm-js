function solution(s) {
  let answer = "";
  const mid = Math.floor(s.length / 2);

  answer += s.length % 2 ? "" : s[mid - 1];
  answer += s[mid];

  return answer;
}
