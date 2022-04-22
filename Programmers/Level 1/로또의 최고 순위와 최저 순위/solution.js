function solution(lottos, win_nums) {
  let min = 0;
  let max = 0;

  for (let lotto of lottos) {
    if (lotto === 0) {
      max++;
      continue;
    }

    for (let win_num of win_nums) {
      if (win_num === lotto) {
        max++;
        min++;
        break;
      }
    }
  }

  const rankMap = [6, 6, 5, 4, 3, 2, 1];
  return [rankMap[max], rankMap[min]];
}
