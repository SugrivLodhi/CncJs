// In Object We can not assign Array and Object As Key.
// const obj = {
//     name: 'sugriv',
//     address: "Sdr",
//     details: {
//         mob: 8278663913,
//         poscode: 272206,
//     }
// }
// obj1 = { name: 'tejendra', Address: 'Jaipur', a: 'bana' }
// console.log(obj.name)
// console.log(obj.details.mob);
// obj.lastName = 'Lodhi'
// obj.details.post = 'beltikar'
// obj.aa = obj1
// console.log(obj);

//But by Map We can Assign object as A Key "Everything in Javascript is Object at the End". 
//IN map Method we can not acces data by Dot notaion and Squre Bracket ,
//Their data can accessable only by of it inbuld function 
const ressultDat = new Map();
ressultDat.set('name', 'Sugriv')
ressultDat.set('address', "Beltikar");
const germany = { names: 'germany', postcode: 22222 }
ressultDat.set(germany, 90)
ressultDat.set([], "hello this");
ressultDat.set({}, "this is an Obejct");
for (const el of ressultDat) {
    console.log(el);
}
//Map is Faster compare to object in case of Data delteion .updation,etc