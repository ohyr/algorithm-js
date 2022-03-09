function solution(arr) {
  let minIdx = 0;
  let minVal = Infinity;
  for (let i = 0; i < arr.length; i += 1) {
    if (minVal > arr[i]) {
      minVal = arr[i];
      minIdx = i;
    }
  }

  arr.splice(minIdx, 1);

  return arr.length === 0 ? [-1] : arr;
}
