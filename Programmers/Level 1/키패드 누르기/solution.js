function distance(a, b) {
  const ax = Math.floor((a - 1) / 3);
  const ay = (a - 1) % 3;
  const bx = Math.floor((b - 1) / 3);
  const by = (b - 1) % 3;

  return Math.abs(ax - bx) + Math.abs(ay - by);
}

function solution(numbers, hand) {
  let answer = "";
  let left = 10;
  let right = 12;

  for (let i = 0; i < numbers.length; i++) {
    let rst = "L";
    const num = numbers[i] === 0 ? 11 : numbers[i];

    if (num === 1 || num === 4 || num === 7) {
      rst = "L";
      left = num;
    } else if (num === 3 || num === 6 || num === 9) {
      rst = "R";
      right = num;
    } else {
      if (distance(left, num) < distance(num, right)) {
        rst = "L";
        left = num;
      } else if (distance(left, num) > distance(num, right)) {
        rst = "R";
        right = num;
      } else {
        if (hand === "left") {
          rst = "L";
          left = num;
        } else if (hand === "right") {
          rst = "R";
          right = num;
        }
      }
    }

    answer += rst;
  }

  return answer;
}
