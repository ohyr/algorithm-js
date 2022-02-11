function recursive(price, count) {
  if (count === 0) return 0;
  return price * count + recursive(price, count - 1);
}

function solution(price, money, count) {
  const answer = price * count + recursive(price, count - 1) - money;
  return answer > 0 ? answer : 0;
}
