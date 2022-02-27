function solution(seoul) {
  let x = 0;

  while (x < seoul.length) {
    if (seoul[x] === "Kim") {
      break;
    }
    x++;
  }

  return `김서방은 ${x}에 있다`;
}
