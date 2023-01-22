const solution = (num_list, n) =>
  Array.from({ length: num_list.length / n }, (v, i) =>
    num_list.slice(i * n, i * n + n)
  );
