const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const solution = (denum1, num1, denum2, num2) => {
  const a = denum1 * num2 + denum2 * num1;
  const b = num1 * num2;
  return [a / gcd(a, b), b / gcd(a, b)];
};
