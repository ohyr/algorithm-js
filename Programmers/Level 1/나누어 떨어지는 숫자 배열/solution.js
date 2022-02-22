function solution(arr, divisor) {
  const answer = [];
  const _arr = arr;
  _arr.sort((a, b) => a - b);

  for (let i = 0; i < _arr.length; i += 1) {
    if (_arr[i] % divisor === 0) {
      answer.push(_arr[i]);
    }
  }

  if (answer.length === 0) {
    answer.push(-1);
  }

  return answer;
}
