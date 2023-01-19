const getWinCase = {
  0: 5,
  2: 0,
  5: 2,
};

const solution = (rsp) => [...rsp].map((v) => getWinCase[v]).join("");
