const getDupCheck = (X) => {
  const xCnt = new Array(10).fill(0);
  for (let i = 0; i < X.length; i++) {
    xCnt[X[i]] += 1;
  }
  return xCnt;
};

const getDupCounts = (X, Y) => {
  const dup = [];
  const xCnt = getDupCheck(X);
  const yCnt = getDupCheck(Y);
  for (let i = 0; i < 10; i++) {
    dup[i] = Math.min(xCnt[i], yCnt[i]);
  }
  return dup;
};

const solution = (X, Y) => {
  let answer = "";

  const dup = getDupCounts(X, Y);
  for (let i = 9; i >= 0; i--) {
    answer += dup[i] === 0 ? "" : `${i}`.repeat(dup[i]);
  }

  if (answer === "") {
    answer = "-1";
  } else if (Number(answer) === 0) {
    answer = "0";
  }

  return answer;
};
