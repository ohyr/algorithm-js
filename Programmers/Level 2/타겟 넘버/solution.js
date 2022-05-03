let answer = 0;

function solution(numbers, target) {
  dfs(0, 0, numbers.length, numbers, target);
  return answer;
}

function dfs(cnt, sum, n, numbers, target) {
  if (cnt === n) {
    answer += sum === target ? 1 : 0;
    return;
  }

  dfs(cnt + 1, sum + numbers[cnt], n, numbers, target);
  dfs(cnt + 1, sum - numbers[cnt], n, numbers, target);
}
