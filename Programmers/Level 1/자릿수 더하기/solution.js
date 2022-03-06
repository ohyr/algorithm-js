function solution(n) {
  let answer = 0;

  let num = String(n).split("");

  for (let i = 0; i < num.length; i += 1) {
    answer += Number(num[i]);
  }

  return answer;
}
