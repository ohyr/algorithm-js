function solution(array, commands) {
  const answer = [];

  for (let command of commands) {
    const i = command[0];
    const j = command[1];
    const k = command[2];

    const arr = [];
    for (let idx = i; idx <= j; idx++) {
      arr.push(array[idx - 1]);
    }
    arr.sort((a, b) => {
      return a - b;
    });
    answer.push(arr[k - 1]);
  }
}
