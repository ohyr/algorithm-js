const sale = [1, 0.95, 0.9, 0.8];

const getSaleIdx = (price) => Math.min(~~(price / 200000 + 0.5), 3);

const getPrice = (price) => price * sale[getSaleIdx(price)];

const solution = (price) => ~~(getPrice(price));
