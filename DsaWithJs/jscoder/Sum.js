const nums = [8, 5, 9, 7, 1, 3, 2, 0, 4, 6];

let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}

console.log(sum);

// O(n) - TC
// O(1) - SC
