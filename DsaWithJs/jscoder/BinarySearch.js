function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2); // To avoid overflow
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // sentinel values
}

const nums = [1, 2, 3, 5, 6, 7, 9];
let target = 5;
const targetIdx = binarySearch(nums, target);
console.log(`Target ${target} is at index ${targetIdx} in the array.`);

// O(log n) time complexity
// O(1) space complexity
