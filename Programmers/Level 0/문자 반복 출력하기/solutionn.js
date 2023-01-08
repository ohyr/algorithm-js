const solution = (my_string, n) =>
  my_string
    .split("")
    .map((m) => m.repeat(n))
    .join("");
