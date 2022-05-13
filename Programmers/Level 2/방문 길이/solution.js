function solution(dirs) {
  let answer = 0;

  const deltas = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let x = 0;
  let y = 0;

  let cnt = 0;

  const set = new Set();

  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i];
    let d = 0;
    if (dir === "D") {
      d = 1;
    } else if (dir === "L") {
      d = 2;
    } else if (dir === "U") {
      d = 3;
    }

    const nx = x + deltas[d][0];
    const ny = y + deltas[d][1];

    if (nx < -5 || 5 < nx || ny < -5 || 5 < ny) {
      cnt++;
      continue;
    }

    if (set.has("" + x + y + nx + ny)) {
      cnt++;
    }
    set.add("" + x + y + nx + ny);
    set.add("" + nx + ny + x + y);

    x = nx;
    y = ny;
  }

  answer = dirs.length - cnt;

  return answer;
}
