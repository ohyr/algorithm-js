function solution(s) {
  let answer = "";
  let isFirst = true;
  for (let i = 0; i < s.length; i++) {
    answer += isFirst ? s[i].toUpperCase() : s[i].toLowerCase();
    isFirst = s[i] === " ";
  }
  return answer;
}
