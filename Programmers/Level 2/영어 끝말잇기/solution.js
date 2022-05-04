function solution(n, words) {
  let a = 0;
  let b = 0;

  const set = new Set();
  set.add(words[0]);

  let prev = words[0][words[0].length - 1];
  for (let i = 1; i < words.length; i++) {
    const cur = words[i][0];
    if (prev !== cur || set.has(words[i])) {
      a = (i % n) + 1;
      b = Math.floor(i / n) + 1;
      break;
    }
    set.add(words[i]);
    prev = words[i][words[i].length - 1];
  }

  return [a, b];
}
