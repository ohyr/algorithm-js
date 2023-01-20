const p = (a, n) =>
  Array(n)
    .fill(a)
    .map((v, i) => v - i)
    .reduce((s, v) => s * v);

const solution = (balls, share) => p(balls, share) / p(share, share);
