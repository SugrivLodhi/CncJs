function getFullName (profesion){
    return this.name + " "+  this.lastName  +" "+ profesion
}

const user = {
    name:"Sugriv",
    lastName:"Lodhi"
}

//console.log("call fullname", getFullName.call(user,"Software engineer"))
//console.log("call fullname", getFullName.apply(user,['Software Engineer Looking for Job Change']))
const bindFun =  getFullName.bind(user,'Software Engineer Looking for Job Change')
//console.log("call fullname", getFullName.bind(user,'Software Engineer Looking for Job Change')())
console.log("call fullname", bindFun())
