function lowerBound(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let ans = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (target <= nums[mid]) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
}

const nums = [2, 3, 5, 5, 6, 7, 9];
let target = 5;
const lb = lowerBound(nums, target);
console.log(
  `Lower bound of target ${target} is at index ${lb} in the array which is ${nums[lb]}.`
);

// O(log n) time complexity
// O(1) space complexity
