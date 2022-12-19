const solution = (food) => {
  const seq = food.map((f, i) => `${i}`.repeat(Math.floor(f / 2)));
  return `${seq.join("")}0${seq.reverse().join("")}`;
};
