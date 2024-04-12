 const arr = [0,0,4,5,16,12,11,8,6,6,5,50,23];
//find maximum element in array

// function maxElement(arr){
//     let len =arr.length;
//     let max=0;
//     for(let i=0; i<len; i++){
//         if(arr[i] >= max){
//             max=arr[i];
//         }
//     }
//     return max;
// }
// console.log("max number in array",maxElement(arr))

//sort the element in array
 
function sortArr(arr){
   let len =arr.length;
   for(let i=0;i<len ;i++){
      for(let j=i+1 ; j<len;j++){
          if(arr[i] > arr[j]){
            [arr[i],arr[j]] =[arr[j],arr[i]] 
          } 
      }
      
   }
   return arr;
}
console.log("sorted array", sortArr(arr))

