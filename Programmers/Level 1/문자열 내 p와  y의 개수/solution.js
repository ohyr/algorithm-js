function solution(s) {
  let cntP = 0;
  let cntY = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] == "P" || s[i] == "p") {
      cntP += 1;
    }
    if (s[i] == "Y" || s[i] == "y") {
      cntY += 1;
    }
  }

  return cntP == cntY ? true : false;
}
