const obj = { name: "sugriv", address: "Jaipur" }
const obj1 = JSON.stringify(obj)
var text = '{ "name":"John", "age":"39", "city":"New York"}';
console.log("stringfy the object", obj1);
console.log(JSON.parse(obj1));
const tex1 = JSON.parse(text)
console.log('parsess', tex1);
//console.log('strh', JSON.stringify(text1));