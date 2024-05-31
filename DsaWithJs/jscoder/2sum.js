function twoSum(numbers, target) {
  let i = 0,
    j = numbers.length - 1;

  while (i < j) {
    const sum = numbers[i] + numbers[j];

    if (sum === target) {
      return [i, j];
    }
    if (target < sum) {
      j--;
    } else if (target > sum) {
      i++;
    }
  }

  return [-1, -1];
}

const nums = [1, 2, 3, 5, 6, 7, 9];
let target = 11;
const [i, j] = twoSum(nums, target);
console.log(`${nums[i]} + ${nums[j]} equals to ${target}.`);

// O(n) time complexity
// O(1) space complexity
