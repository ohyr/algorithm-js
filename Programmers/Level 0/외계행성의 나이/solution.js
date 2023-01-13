const PROGRAMMERS_962 = "abcdefghij";

const solution = (age) =>
  age
    .toString()
    .split("")
    .map((a) => PROGRAMMERS_962[a])
    .join("");
