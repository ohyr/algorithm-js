function solution(n, lost, reserve) {
  const checked = new Array(n + 2).fill(false);

  reserve.forEach((r) => (checked[r] = true));

  const realLost = lost.filter((l) => !checked[l]).sort((a, b) => a - b);

  lost.forEach((l) => (checked[l] = checked[l] ? false : false));

  realLost.forEach((l) => {
    if (checked[l - 1]) {
      checked[l - 1] = false;
    } else if (checked[l + 1]) {
      checked[l + 1] = false;
    } else {
      n -= 1;
    }
  });

  return n;
}
