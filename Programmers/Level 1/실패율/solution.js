function solution(N, stages) {
  const answer = [];

  const cnt = new Array(N + 1);
  for (let i = 0; i < N + 1; i++) {
    cnt[i] = 0;
  }
  for (let i = 0; i < stages.length; i++) {
    cnt[stages[i]] += 1;
  }

  const rst = new Array(N);
  for (let i = 0; i < N; i++) {
    rst[i] = [0, 0];
  }

  let stg = stages.length;
  for (let i = 0; i < N; i++) {
    rst[i][0] = cnt[i + 1] / stg;
    rst[i][1] = i + 1;
    stg -= cnt[i + 1];
  }

  rst.sort((a, b) => b[0] - a[0]);

  return rst.map((a) => a[1]);
}
