const removeDuplicateElement = (nums) => {
  const seen = {};
  const uniqueElement = [];

  for (let num of nums) {
    if (!seen[num]) {
      uniqueElement.push(num);
      seen[num] = true;
    }
  }
  return uniqueElement;
};

console.log("remove", removeDuplicateElement([1, 2, 3, 2]));
