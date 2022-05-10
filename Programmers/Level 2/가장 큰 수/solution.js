function solution(numbers) {
  let answer = "";

  const numstrs = numbers.map((n) => String(n));
  numstrs.sort((a, b) => b + a - (a + b));

  for (let i = 0; i < numstrs.length; i++) {
    answer += numstrs[i];
  }

  if (answer[0] === "0") return "0";

  return answer;
}
