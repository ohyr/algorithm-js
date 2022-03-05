function solution(s) {
  return s
    .split(" ")
    .map((w) =>
      w
        .split("")
        .map((c, key) => (key % 2 ? c.toLowerCase() : c.toUpperCase()))
        .join("")
    )
    .join(" ");
}
