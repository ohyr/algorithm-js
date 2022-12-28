const solution = (array) => {
  const cnt = new Map();
  for (let a of array) {
    cnt.set(a, (cnt.get(a) || 0) + 1);
  }

  const sCnt = [...cnt].sort((a, b) => b[1] - a[1]);
  return sCnt.length === 1 || sCnt[0][1] > sCnt[1][1] ? sCnt[0][0] : -1;
};
