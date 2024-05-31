const nums = [8, 5, 9, 7, 1, 3, 2, 0, 4, 6];
const n = nums.length;

for (let i = 0, endIdx = n - 1; i < n; i++, endIdx--) {
  const maxIdx = getMaxIdx(nums, endIdx);
  swap(nums, maxIdx, endIdx);
}

console.log(nums);

function getMaxIdx(nums, endIdx) {
  let maxIdx = 0;
  for (let i = 1; i <= endIdx; i++) {
    if (nums[i] > nums[maxIdx]) {
      maxIdx = i;
    }
  }
  return maxIdx;
}

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// O(n2) - TC
// O(1) - SC
