const solution = (hp) => {
  let answer = 0;
  const ants = [5, 3, 1];

  for (const ant of ants) {
    answer += ~~(hp / ant);
    hp = hp % ant;
  }

  return answer;
};
