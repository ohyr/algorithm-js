function solution(sizes) {
  let w = 0;
  let h = 0;

  sizes.forEach((size) => {
    w = Math.max(w, Math.max(size[0], size[1]));
    h = Math.max(h, Math.min(size[0], size[1]));
  });

  return w * h;
}
