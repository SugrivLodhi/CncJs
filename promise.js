const p1 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
      resolve("P1 is success")
   },3000)  
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    // resolve("P2 is success")
    reject("P2 is rejected")
    },1000)  
 })
 const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("p3 is reject")
      // resolve("P3 is success")
    },2000)  
 })

 Promise.all([p1,p2,p3]).then((result)=>{
    console.log("resov",result)
 }).catch((err)=>{
    console.error("err",err)
 })
 Promise.allSettled([p1,p2,p3]).then((result)=>{
    console.log("resov",result)
 }).catch((err)=>{
    console.error("err",err)
 })
 Promise.race([p1,p2,p3]).then((result)=>{
    console.log("resov",result)
 }).catch((err)=>{
    console.error("err",err)
 })
 Promise.any([p1,p2,p3]).then((result)=>{
    console.log("resov",result)
 }).catch((err)=>{
    console.error("err",err)
 })