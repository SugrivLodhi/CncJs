const data = [8, 5, 9, 7, 1, 3, 2,2, 0, 4, 6];
//sort the element without inbuild method
const mySortMethod = (arr) =>{
   for(let i=0;i<arr.length;i++){
      for(let j=i+1;j< arr.length;j++){
          if(arr[i]>arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
      }
   }  
  return arr
  
}
console.log("sorted by me",mySortMethod(data))