// const data =["arr","Object","value","Key"]
// const val = data.map((e) =>{
//     console.log(e)
// })

// const datas ={
    
//    name: {firstName:"sugriv",lastName:"Lodhi"}}
// const vals = Object.values(datas);
// console.log("val",vals);
 
// const val =undefined;
// const isVal = !val;
// console.log("is value",isVal)
// if(val){
//    console.log("I am")
// }

//console.log("value",Boolean([].length));
//const obj ={firstName:"Sugriv",lastName:"Loshi"};
//const obj2 ={...obj,firstName:null};
//console.log("name",obj2);
// const val=5;
// const ss =6
// const nn=8
// const val1 =ss&&nn&&val;
// console.log("val",val1); 
const myName = {
   names:"Sugriv",
    addesee:"basawanpur",
    2:"nuber is two",
    boolean:true,
   }
//all key in object in javascript is string and keep in mind if its string ,then string have Qoute('' or "")
/*when we are accessing key of object without qoute in bracket it give reference error ,beacauase we have
not declare the variable */
/*  when we are using numeric key ,the Dot(.) notation is failed beacuse numiric key is not
  valid identifier in javscript  ,here is only one option to access numeric key in javascript 
  is Bracket Notation myName["2"] and also we can accsess by myName[2], in this case its not through
  error beacuse javascript coerce(the process of automatic or implicit conversion of values
     from one data type to another. This includes conversion from Number to String, String to 
     Number, Boolean to Number etc.) the number into string ,beacuse its aspection key as a string*/



console.log("your name",myName?.[2]);
