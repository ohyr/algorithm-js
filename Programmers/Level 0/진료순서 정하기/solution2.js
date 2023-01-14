const solution = (emergency) =>
  emergency.map((e) => [...emergency].sort((a, b) => b - a).indexOf(e) + 1);
