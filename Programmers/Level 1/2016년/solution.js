function solution(a, b) {
  let answer = "";
  const dayMap = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const monthEnd = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  a--;
  b--;

  let sum = 0;
  for (let i = 0; i < a; i += 1) {
    sum += monthEnd[i];
  }
  sum += b;
  sum %= 7;

  answer = dayMap[sum];

  return answer;
}
