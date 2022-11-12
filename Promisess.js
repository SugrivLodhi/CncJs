function getAllo(){
    return new Promise((resove,reject)=>{
           let allo=5      
        setTimeout(() =>{
                 if(allo>3){
                    resove("allo parathe is ready to serve");
                 }
                 else{
                    reject("I have no mood")
                 }
                 },1000);     
    })
}
function getPaneer(){
    return new Promise((resove,reject)=>{
           let allo=5  
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
// getAllo().then((val) =>{
//     console.log(val);
// })
// getPaneer().then((vals)=>{
//     console.log(vals)
// })
// .catch((er) =>{
//     console.log(er) 
// })
 
async function getResult() {
    try{
        let result = await getAllo();
        console.log(result)
        console.log("hello I am ready to run")
        let resultTwo = await getPaneer();
        
        console.log(resultTwo);
        
    } 
    catch(er){
        console.log(er);
    }
   
}
getResult();

//const res =getAllo();
//console.log("result",res)
