function solution(arr) {
  return arr.reduce((sum, a) => sum + a, 0) / arr.length;
}
