const obj1 = { name: 'sugriv', address: 'Sdr', pincode: '272206', state: 'Utttar Pradesh', country: 'India' }
Object.entries(obj1).map((item) => {
    const keys = item[0][0]
    const values = item[1][1]
    console.log(keys, values)
});

const arrOfObject = Object.entries(obj1);
console.log(arrOfObject);

const arr = ['pradeep', 'ravi', 'DK'];
arr.map((item) => {
    console.log('aray', item[0])
});

const objectOfArr = [{ name: 'sugriv' }, { name: 'Tejendra' }, { name: 'Heena' }];
objectOfArr.map((item) => {
    console.log(item.name);
    console.log(item);
})