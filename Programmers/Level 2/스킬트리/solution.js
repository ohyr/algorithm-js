function solution(skill, skill_trees) {
  let answer = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    const skill_tree = skill_trees[i];
    let isGood = true;
    let prev = 0;
    for (let j = 0; j < skill.length; j++) {
      const s = skill[j];
      const cur = skill_tree.indexOf(s);
      if (prev === -1 && cur !== -1) {
        isGood = false;
        break;
      }
      if (cur !== -1 && cur < prev) {
        isGood = false;
        break;
      }
      prev = cur;
    }
    if (isGood) {
      answer++;
    }
  }

  return answer;
}
