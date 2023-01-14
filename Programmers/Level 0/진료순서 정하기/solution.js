const solution = (emergency) =>
  emergency
    .map((e, i) => [e, i])
    .sort((a, b) => b[0] - a[0])
    .map((e, i) => [...e, i + 1])
    .sort((a, b) => a[1] - b[1])
    .map((e) => e[2]);
