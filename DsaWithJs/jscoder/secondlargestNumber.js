//Second largest element in array .

const input = [1,5,7,6,5,3]
//const output = 6
const getSecondLargestNumber = (arr)=>{
    let largest = arr[0];
    let secondLargest  = -Infinity;
  for(let i=1;i<arr.length; i++){
     if(arr[i]>largest){
       secondLargest = largest;
       largest = arr[i]
     }
    else if(arr[i] > secondLargest && arr[i] !==largest){
         secondLargest= arr[i]
    }
  }
  return secondLargest
}

console.log("max",getSecondLargestNumber(input))