const solution = (n) =>
  Array(n)
    .fill(1)
    .map((v, i) => v + i)
    .filter((v) => n % v === 0).length;
