function solution(participant, completion) {
  let answer = participant[0];

  const map = new Map();
  for (let i = 0; i < completion.length; i++) {
    const c = completion[i];
    map.set(c, map.has(c) ? map.get(c) + 1 : 1);
  }

  for (let i = 0; i < participant.length; i++) {
    const p = participant[i];
    if (!map.has(p) || map.get(p) === 0) {
      answer = p;
      break;
    }
    map.set(p, map.get(p) - 1);
  }

  return answer;
}
