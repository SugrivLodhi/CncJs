//Call by Value
// let a = 10;
// let b=a;
// //  b=b+a;
// console.log("value of a" ,a)
// console.log( "value of b",b)
// if(a===b){
//     console.log("both are equal");
// }

// //call by reference
//  let obj ={
//     name:"sugriv",
//     pass:"1234",
//  }
//  let obj2 ={
//     name:"sugriv",
//     pass:"1234",
//  }
// let obj1 =obj;
//  //obj.pass ="3214"
//  console.log("obj",obj);
//  console.log("obj1",obj1);
// if(obj1==obj){
// console.log("both object are Equal");
// } 
// if(obj1==obj2){
//   console.log("both are equal");
// }
// else{
//     console.log("both are not Equal");
// }

const box3 = {
   contents: "salt"
 }
 
 let box4 = box3
 box4 = { ...box3 }
 box4.contents = "pepper"

console.log(box3.contents) //returns "pepper"
console.log(box4.contents) //returns "pepper"

