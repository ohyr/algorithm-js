const solution = (n) =>
  Array(n)
    .fill(1)
    .map((v, i) => v + i)
    .filter((v) => v % 2 !== 0);
