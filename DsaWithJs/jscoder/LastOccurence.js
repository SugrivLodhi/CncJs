function lastOccurence(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let ans = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (target === nums[mid]) {
      ans = mid;
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
}

const nums = [2, 2, 3, 3, 3, 3, 5, 5, 5, 5, 5, 6, 6, 7, 9];
let target = 5;
const lastIdx = lastOccurence(nums, target);
console.log(
  `Last occurence of target ${target} is at index ${lastIdx} in the array which is ${nums[lastIdx]}.`
);

// O(log n) time complexity
// O(1) space complexity
