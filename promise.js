// const p1 = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//       resolve("P1 is success")
//    },3000)  
// })
// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     // resolve("P2 is success")
//     reject("P2 is rejected")
//     },1000)  
//  })
//  const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("p3 is reject")
//       // resolve("P3 is success")
//     },2000)  
//  })

//  Promise.all([p1,p2,p3]).then((result)=>{
//     console.log("resov",result)
//  }).catch((err)=>{
//     console.error("err",err)
//  })
//  Promise.allSettled([p1,p2,p3]).then((result)=>{
//     console.log("resov",result)
//  }).catch((err)=>{
//     console.error("err",err)
//  })
//  Promise.race([p1,p2,p3]).then((result)=>{
//     console.log("resov",result)
//  }).catch((err)=>{
//     console.error("err",err)
//  })
//  Promise.any([p1,p2,p3]).then((result)=>{
//     console.log("resov",result)
//  }).catch((err)=>{
//     console.error("err",err)
//  })

// console.log("hello");

// const task = new Promise((resolve,reject)=>{
//       resolve("Vineet")
//       console.log("Sugriv") 
// })
// task.then((res)=>{
//    console.log("you are good",res)
//    return res
// }).then((res)=>{
//    console.log("hello",res)
//    console.log("you are nice")
// })

// setTimeout(()=>{
//    console.log("your time start here")
// },1000)
// console.log("you are welcome")

//output expected
// hello
// Sugriv
// you are welcome
// you are good Vineet
// hello Vineet
// you are nice
// your time start here

// const add= (multi)=>{
//    const value = multi(5,7)
//    console.log("hello",value)
//    const data= 6+value
//    return data
// }
// const multiply = (a,b)=> {
//    return a*b
// }
// console.log("value",add(multiply))

let p = new Promise((resol,rej)=>{
   resol(1);
   console.log(2)
})

p.then((result)=> {
   console.log(result)
   return result + 1
})

p.then((result)=> console.log(result))

setTimeout(()=>{
console.log(4)
})
console.log(5)
//expected output
//2
//5
//1
//2
//4