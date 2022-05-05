function solution(maps) {
  let answer = -1;

  const n = maps.length;
  const m = maps[0].length;

  const visited = [];
  for (let i = 0; i < n; i++) {
    const line = [];
    for (let j = 0; j < m; j++) {
      line[j] = false;
    }
    visited.push(line);
  }

  const q = [];
  q.push([1, 0, 0]);

  while (q.length !== 0) {
    const cnt = q[0][0];
    const x = q[0][1];
    const y = q[0][2];
    q.shift();

    if (x < 0 || n <= x || y < 0 || m <= y) continue;
    if (maps[x][y] === 0) continue;
    if (visited[x][y]) continue;
    visited[x][y] = true;

    if (x === n - 1 && y === m - 1) {
      answer = cnt;
      break;
    }

    q.push([cnt + 1, x, y + 1]);
    q.push([cnt + 1, x + 1, y]);
    q.push([cnt + 1, x, y - 1]);
    q.push([cnt + 1, x - 1, y]);
  }

  return answer;
}
