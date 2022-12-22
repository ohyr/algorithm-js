function solution(number, limit, power) {
  let answer = 0;

  const num = new Array(number + 1).fill(1);
  for (let i = 2; i <= number; i++) {
    for (let j = 1; j * i <= number; j++) {
      num[i * j]++;
    }
  }

  for (let i = 1; i <= number; i++) {
    answer += num[i] > limit ? power : num[i];
  }

  return answer;
}
