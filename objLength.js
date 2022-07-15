// // const obj = [{ id: 1, name: 'sugriv', lastName: 'Lodhi', address: 'sdr' },
// //         { id: 2, name: 'rpy', lastName: 'Lodhi', address: 'sdr' },
// //         { id: 3, name: 'Pk', lastName: 'Lodhi', address: 'sdr' }]

// //console.log(Object.keys(obj).length)
// //Useing Destrucring we can use Map function
// // const allData = obj.map(({ name, address }) => {
// //     return (name)
// // })

// // console.log(allData)
// // const allData = obj.map((data) => {
// //     return data.name
// // }).filter((item) => {
// //     return item.includes('r')
// // })
// // console.log(allData);
// // (function() {
// //     console.log("Welcome to GeeksforGeeks!");
// // })();

const obj1 = { name: 'sugriv', lastName: "lodhi" }
console.log("length of the object", obj1.length());
//console.log("object length is", Object.keys(obj1).length());
//console.log("object length of obj1", obj1.length());
//let a = {}
// if (a.isEmpty()) {
//     console.log("hello I am undefine")
// }
// if ({} == 'undefined') {
// console.log("hello I am Undefined");
// }

// // if (true === 1) {
// //     console.log("yes");
// // }
// // console.log("no")
// const cost_fee = [{
//         "fees": 30,
//         "fee_id": 3,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 20,
//         "fee_id": 4,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 30,
//         "fee_id": 9,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 202,
//         "fee_id": 1,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 2343,
//         "fee_id": 1,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 202,
//         "fee_id": 1,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 210,
//         "fee_id": 1,
//         "cost_type_id": 2
//     },
//     {
//         "fees": 210,
//         "fee_id": 3,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 10,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 10,
//         "fee_id": 3,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 10,
//         "fee_id": 1,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 10,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 234,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 2,
//         "fee_id": 1,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 3,
//         "fee_id": 3,
//         "cost_type_id": 3
//     },
//     {
//         "fees": 4,
//         "fee_id": 7,
//         "cost_type_id": 2
//     },
//     {
//         "fees": 5,
//         "fee_id": 4,
//         "cost_type_id": 2
//     },
//     {
//         "fees": 6,
//         "fee_id": 6,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 10,
//         "fee_id": 1,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 10,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 10,
//         "fee_id": 1,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 45,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 45,
//         "fee_id": 5,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 55,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 55,
//         "fee_id": 5,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 65,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 65,
//         "fee_id": 5,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 85,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 85,
//         "fee_id": 5,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 10,
//         "fee_id": 1,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 10,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 10,
//         "fee_id": 1,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 10,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 10,
//         "fee_id": 1,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 10,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 10,
//         "fee_id": 1,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 10,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 10,
//         "fee_id": 1,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 10,
//         "fee_id": 3,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 34,
//         "fee_id": 9,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 10,
//         "fee_id": 30,
//         "cost_type_id": 2
//     },
//     {
//         "fees": 6,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 4,
//         "fee_id": 28,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 10,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 3,
//         "fee_id": 29,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 20,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 4,
//         "fee_id": 28,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 30,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 4,
//         "fee_id": 28,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 40,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 4,
//         "fee_id": 28,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 55,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 4,
//         "fee_id": 28,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 70,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 4,
//         "fee_id": 28,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 52,
//         "fee_id": 3,
//         "cost_type_id": 3
//     },
//     {
//         "fees": 2,
//         "fee_id": 1,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 10,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 4,
//         "fee_id": 28,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 15,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 4,
//         "fee_id": 28,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 20,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 4,
//         "fee_id": 28,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 30,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 4,
//         "fee_id": 28,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 40,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 4,
//         "fee_id": 28,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 55,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 4,
//         "fee_id": 28,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 70,
//         "fee_id": 2,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 4,
//         "fee_id": 28,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 10,
//         "fee_id": 1,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 1,
//         "fee_id": 9,
//         "cost_type_id": 1
//     },
//     {
//         "fees": 5,
//         "fee_id": 28,
//         "cost_type_id": 2
//     }
// ]
// const costype = cost_fee.find((cost) => {
//     if (cost.cost_type_id === 1) {
//         return
//     } else if (cost.cost_type_id === 2) {
//         return
//     } else if (cost.cost_type_id === 3) {
//         return
//     }
// })
// // console.log("cost type", costype);