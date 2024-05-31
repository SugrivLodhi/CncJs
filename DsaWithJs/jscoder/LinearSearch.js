const nums = [8, 5, 9, 7, 1, 3, 2, 0, 4, 6];
const target = 3;
console.log("length",nums.length)
for (let i = 0; i < nums.length; i++) {
  console.log("target",i)
  if (nums[i] === target) {
    console.log(`Target ${target} is at index ${i} in the array.`);
    break;
  }
}
//Using break we will terminate the iteration once find the taeget element it will reduce the time complexity little bit 
// O(n)
// O(1)
