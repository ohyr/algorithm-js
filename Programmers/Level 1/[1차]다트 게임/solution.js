function solution(dartResult) {
  const dart = [0, 0, 0, 0];
  let idx = 0;

  for (let i = 0; i < dartResult.length; i++) {
    let rst = dartResult[i];

    if (rst === "*") {
      dart[idx - 1] *= 2;
      dart[idx] *= 2;
    } else if (rst === "#") {
      dart[idx] = -dart[idx];
    } else if (rst === "S") {
      dart[idx] = dart[idx];
    } else if (rst === "D") {
      dart[idx] = dart[idx] * dart[idx];
    } else if (rst === "T") {
      dart[idx] = dart[idx] * dart[idx] * dart[idx];
    } else {
      if (rst === "1" && dartResult[i + 1] === "0") {
        i++;
        rst = "10";
      }
      idx++;
      dart[idx] = Number(rst);
    }
  }

  return dart[1] + dart[2] + dart[3];
}
