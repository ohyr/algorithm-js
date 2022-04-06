function solution(arr1, arr2) {
  const answer = new Array(arr1.length);

  for (let i = 0; i < arr1.length; i++) {
    const line = [];
    for (let j = 0; j < arr2[0].length; j++) {
      line.push(0);
    }
    answer[i] = line;
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      for (let k = 0; k < arr1[0].length; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return answer;
}
