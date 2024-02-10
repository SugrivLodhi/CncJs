const calc = (n) =>{
    let sum=0;
  for(let i=0;i<=n;i++){
    sum+=i;
  }
  return sum;
}
const memoise =(fun) =>{
    let cache ={}
    return function(p){
       let n=p;
       if(n in cache){
         console.log("present in cache")
         console.log("cache",cache);
          return cache[n];  

       }
       else{
        console.log("if not in cache")
         let val =fun(n)
         cache[n] =val
         return val
       }
    }
} 
const cal =memoise(calc)
 
console.time()
console.log("sum",cal(5));
console.timeEnd();
console.time()
console.log("sum",cal(5));
console.timeEnd();

console.time()
console.log("sum",cal(20));
console.timeEnd();

console.time()
console.log("sum",cal(20));
console.timeEnd();
console.time()
