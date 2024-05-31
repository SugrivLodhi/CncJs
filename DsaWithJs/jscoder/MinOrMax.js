const nums = [8, 5, 9, 7, 1, 3, 2, 4, 6];

let min = nums[0];
let minIdx = 0;

for (let i = 1; i < nums.length; i++) {
  if (nums[i] < min) {
    min = nums[i];
    minIdx = i;
  }
}

//console.log(`Min: ${min}`);
//console.log(`Index of min: ${minIdx}`);
//console.log("min",Math.min(...nums))
//console.log("max",Math.max(...nums))
// O(n) - TC
// O(1) - SC
