function solution(s) {
  let answer = s;

  const numstr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < 10; i++) {
    answer = answer.replace(RegExp(numstr[i], "g"), i);
  }

  return parseInt(answer);
}
