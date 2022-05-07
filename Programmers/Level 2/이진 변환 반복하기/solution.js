function solution(s) {
  let answer = [0, 0];
  let _s = s;

  while (_s !== "1") {
    let cnt = 0;
    for (let i = 0; i < _s.length; i++) {
      if (_s[i] === "1") {
        cnt++;
      }
    }
    answer[0]++;
    answer[1] += _s.length - cnt;

    _s = cnt.toString(2);
  }

  return answer;
}
