 // Enhanced Object Literals
// function getMobile(manufacturer, model, year) {
//     return {
//        manufacturer,
//        model,
//        year
//     }
//  }
// console.log(getMobile("Samsung", "Galaxy", "2020"));
//output : { manufacturer: 'Samsung', model: 'Galaxy', year: '2020' }


//Object.assign() method can be used to clone an object.

// let person = { height: '176' };
// let clonePerson = Object.assign({}, person);
// console.log(clonePerson); // {height:'176'}


//Object.assign() can also be used to merge objects.

// let person = {height:'176'};
// let employee = {id:'#1237', name:'John'};
// let myEmp = Object.assign({}, person, employee);
// console.log(myEmp); //{height:'176',id:'#1237', name:'John'}

//Object.is() determines if the two values are the same.

// let a=10, b=10;
// Object.is(a,b); //true
// let c=20;
// Object.is(a,c);//false
// let obj1={a:1};
// let obj2={a:1};
// Object.is(obj1, obj2);//false, as both objects don't have same reference
// Object.is(obj1, obj1);//true, both objects have the same reference

//The optional chaining ?. is a safe way to access nested object properties, 
//even if an intermediate property doesn’t exist.

//The optional chaining ?. stops the evaluation if the value before ?.
// is undefined or null and returns undefined.
/*The variable must be declared (e.g. let/const/var user or as a function parameter). 
The optional chaining works only for declared variables.*/
// let user = {}; // user has no address

// console.log(user?.address?.street );


//let key = "firstName";

// let user1 = {
//   firstName: "John"
// };

// let user2 = null;

// console.log( user1?.['firstName'] ); // John
// console.log( user2?.[key] ); // undefined

// The optional chaining ?. syntax has three forms:

// obj?.prop – returns obj.prop if obj exists, otherwise undefined.
// obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
// obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
// As we can see, all of them are straightforward and simple to use. The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.

// A chain of ?. allows to safely access nested properties.
//  const data ={

//  }
//  console.log(data?.name || 1)

//Sometimes an object contains some set of properties, but you want to destructure it changing the names.
// const person = {
//     firstName: 'Tom',
//     lastName: 'Cruise'
//   }
  
//   const { firstName: name, lastName:lname } = person
//   console.log(name,lname);


 
//  export const app =()=>{
//   console.log("this lead");
//  }
// const typo = "1"
// console.log("value",typo);
// console.log("value",`${typo}`);
// const val = "123453331111"
// console.log(val.slice(0,val.length-6))
// console.log(val.slice(val.length-6,val.length-1))
// const val= "auat/aa/httpaa"
// console.log(val.includes('/aa/httpaa')) 
//const homePageLinks = { mobile: 'https://www.iselect.com.au/mobile/' },
// const data =[null,null];
// console.log("sd",data.toString()+"val")
// console.log("data",!!undefined)
const common =(a=10,b=20,c=40) =>{
    return a+b+c
}
console.log(common(0,10,0))
