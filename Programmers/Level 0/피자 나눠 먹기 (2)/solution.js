const NUMBER_OF_PIECES = 6;

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const solution = (n) => n / gcd(n, NUMBER_OF_PIECES);
