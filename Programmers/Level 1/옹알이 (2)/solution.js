const BABBLING_LIST = ["aya", "ye", "woo", "ma"];
let canBabbling;

const simul = (str, idx, prev) => {
  if (canBabbling) return;
  if (str.length === idx) {
    canBabbling = true;
    return;
  }

  for (let i = 0; i < BABBLING_LIST.length; i++) {
    const cur = BABBLING_LIST[i];
    if (cur === prev) continue;
    if (idx + cur.length > str.length) continue;
    if (cur !== str.substring(idx, idx + cur.length)) continue;
    simul(str, idx + cur.length, cur);
  }
};

const solution = (babbling) => {
  let answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    canBabbling = false;
    simul(babbling[i], 0, "");
    if (canBabbling) answer++;
  }

  return answer;
};
