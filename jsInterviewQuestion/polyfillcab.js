function getFullName(profesion) {
  return this.name + " " + this.lastName + " " + profesion;
}

const user = {
  name: "Sugriv",
  lastName: "Lodhi",
};

// Function.prototype.myCall = function (currentContext = {}, ...arg) {
//   if (typeof this !== "function") {
//     throw new Error("Not callable");
//   }
//   currentContext.fn = this;
//   return currentContext.fn(...arg);
// };

// console.log("first my Call", getFullName.myCall(user, "Software enineer"));

// Function.prototype.myApply = function (currentContext= {},arg){
//     if(typeof this !=='function'){
//       throw new Error("this is not callable")
//     }
//     if(!Array.isArray(arg)) {
//         throw new Error(arg +""+"shoud be array")
//     }
//     currentContext.fn=this;
//     return currentContext.fn(...arg)
// }

// console.log("first my Apply", getFullName.myApply(user, ["Software engineer"]));

Function.prototype.myBind= function (currentContext={},...arg){
    if(typeof this !=='function'){
        throw new Error( this+""+ "is not callable")
    }
    currentContext.fn= this
    return function () {
        return currentContext.fn(...arg)
    }
}
const ownBind =getFullName.myBind(user, "Software engineer")

console.log("first my bind",ownBind() );