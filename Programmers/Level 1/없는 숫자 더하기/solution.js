function solution(numbers) {
  return 45 - numbers.reduce((sum, n) => sum + n);
}
