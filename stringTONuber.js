// const stringNuber = ["123","abc","5679",""];
// const numbers = stringNuber.map(Number)
// console.log("string to nuber conversion",numbers);

// const a= ',, , ,'.split(',').map(e => e.trim()).filter(e => e).join(', ')
// console.log("aa",a)

const data = [{label: 'New Development Fee (If Applicable)', value: '275.00'}]
const val = data.map((e)=>({label:e.label}))
console.log("val",...data)
