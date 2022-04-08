function solution(people, limit) {
  const _people = people.sort((a, b) => a - b);

  let answer = 0;

  let a = 0;
  let b = _people.length - 1;

  while (a <= b) {
    if (_people[b] + _people[a] <= limit) {
      a++;
    }
    b--;
    answer++;
  }

  return answer;
}
