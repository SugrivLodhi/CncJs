var sumOfUnique = function(nums) {
    let count = {}
    for(let i=0; i<nums.length; i++){
        count[nums[i]]=(count[nums[i]] || 0 )+1
    }
    let uniqueSum = 0;
    for(let i=0; i<nums.length; i++){
        if(count[nums[i]]===1){
          uniqueSum +=nums[i]    
        }
    } 
   return uniqueSum  
 };
 console.log("is eequ",sumOfUnique(
    [1,2,3,4,3]))