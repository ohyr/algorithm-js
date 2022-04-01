function dec2bin(n, a) {
  let rst = "";

  while (n-- > 0) {
    rst += a % 2 === 1 ? "#" : " ";
    if (a > 0) a = Math.floor(a / 2);
  }

  return rst.split("").reverse().join("");
}

function solution(n, arr1, arr2) {
  let answer = [];
  let map1 = [];
  let map2 = [];

  for (let i = 0; i < n; i++) {
    map1[i] = dec2bin(n, arr1[i]);
  }

  for (let i = 0; i < n; i++) {
    map2[i] = dec2bin(n, arr2[i]);
  }

  for (let i = 0; i < n; i++) {
    let line1 = map1[i];
    let line2 = map2[i];
    let line = "";
    for (let j = 0; j < n; j++) {
      if (line1[j] === "#" || line2[j] === "#") {
        line += "#";
      } else {
        line += " ";
      }
    }
    answer[i] = line;
  }

  return answer;
}
