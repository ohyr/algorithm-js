function solution(arr) {
  let answer = 1;

  while (true) {
    let isFin = true;

    for (let i = 0; i < arr.length; i++) {
      if (answer % arr[i] != 0) {
        isFin = false;
        break;
      }
    }

    if (isFin) {
      break;
    }
    answer++;
  }

  return answer;
}
