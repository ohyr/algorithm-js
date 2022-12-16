const comb = (start, cnt, n, k, number, global) => {
  if (cnt === k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
      sum += number[global.idx[i]];
    }
    if (sum === 0) {
      global.answer += 1;
    }
    return;
  }
  for (let i = start; i < n; i++) {
    global.idx[cnt] = i;
    comb(i + 1, cnt + 1, n, k, number, global);
  }
};

const solution = (number) => {
  const n = number.length;
  const k = 3;
  const global = {
    answer: 0,
    idx: new Array(k).fill(0),
  };
  comb(0, 0, n, k, number, global);
  return global.answer;
};
