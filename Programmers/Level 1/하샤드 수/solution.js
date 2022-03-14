function solution(x) {
  const sum = String(x).split("").reduce((sum, num) => Number(sum) + Number(num));
  return x % sum ? false : true;
}
