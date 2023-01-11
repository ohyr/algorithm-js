const LAMB_SKEWERS_PRICE = 12000;
const DRINK_PRICE = 2000;
const SERVICE_NUMBER = 10;

const solution = (n, k) =>
  LAMB_SKEWERS_PRICE * n + DRINK_PRICE * (k - ~~(n / SERVICE_NUMBER));
