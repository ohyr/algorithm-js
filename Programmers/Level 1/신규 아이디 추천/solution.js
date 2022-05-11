function solution(new_id) {
  let answer = "";

  // 1
  answer = new_id.toLowerCase();

  // 2
  const regex2 = /[a-z0-9._\-]/;
  answer = answer
    .split("")
    .map((a) => (regex2.test(a) ? a : ""))
    .join("");

  // 3
  let tmp = answer[0];
  let prev = answer[0];
  for (let i = 1; i < answer.length; i++) {
    const cur = answer[i];
    if (!(cur === "." && prev === ".")) tmp += cur;
    prev = cur;
  }
  answer = tmp;

  // 4
  if (answer[0] === ".") answer = answer.substring(1, answer.length);
  if (answer[answer.length - 1] === ".")
    answer = answer.substring(0, answer.length - 1);

  // 5
  if (answer === "") answer = "a";

  // 6
  if (answer.length >= 16) {
    answer = answer.substring(0, 15);
    if (answer[14] === ".") answer = answer.substring(0, 14);
  }

  // 7
  if (answer.length <= 2) {
    const lastStr = answer[answer.length - 1];
    while (answer.length < 3) answer += lastStr;
  }

  return answer;
}
