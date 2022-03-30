function solution(nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  return set.size < nums.length / 2 ? set.size : nums.length / 2;
}
