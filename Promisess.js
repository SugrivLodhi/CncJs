// we can name any thing in Promise parameter ,it only matter sequence of using
function getAllo(allo){
    return new Promise((res,rej)=>{     
        setTimeout(() =>{
                 if(allo>3){
                    res("allo parathe is ready to serve");
                 }
                 else{
                    rej("I have no mood ,I will ")
                 }
                 },1000);     
    })
}
function getPaneer(allo){
    return new Promise((resove,reject)=>{
        setTimeout(() =>{
                 if(allo>3){
                    resove("Paneer is ready to serve");
                 }
                 else{
                    reject("I have no moods")
                 }
                 },1000);     
    })
}
// getAllo(2).then((val) =>{
//     console.log(val);
// }).catch((v)=> console.log(v))
// getPaneer(3).then((vals)=>{
//     console.log(vals)
// })
// .catch((er) =>{
//     console.log(er) 
// })

 //once one promise failed it reject to excute next line of code and come out from try to catch
async function getResult() {
    try{
        let result = await getAllo(4);
        console.log(result)
        console.log("hello I am ready to run")
        let resultTwo = await getPaneer(3);
         
        console.log(resultTwo);
        
    } 
    catch(er){
        console.log(er);
    }
   
}
getResult();

//const res =getAllo();
//console.log("result",res)
