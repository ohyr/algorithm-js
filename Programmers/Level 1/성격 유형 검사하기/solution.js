const setValue = (s, c, scoreTable) =>
  (scoreTable[s[Math.floor(c / 4)]] += Math.abs(c - 4));

const getType = (s, scoreTable) =>
  scoreTable[s[0]] >= scoreTable[s[1]] ? s[0] : s[1];

const getAnswer = (types, scoreTable) =>
  types.map((t) => getType(t, scoreTable)).join("");

const solution = (survey, choices) => {
  const n = survey.length;

  const scoreTable = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < n; i++) {
    const s = survey[i];
    const c = choices[i];
    setValue(s, c, scoreTable);
  }

  return getAnswer(["RT", "CF", "JM", "AN"], scoreTable);
};
