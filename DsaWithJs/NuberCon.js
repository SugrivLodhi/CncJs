// const val =0
// console.log("value",parseInt(val));
let arr1 = [
    {
        id: 23448,
        sale_product_id: 78110,
        category_id: 4,
        addon_id: 23,
        cost: "0.00",
        cost_name: "Upfront",
        cost_period: "upfront",
        addon_name: "BYO Modem"
    },
    {
        id: 23448,
        sale_product_id: 78110,
        category_id: 4,
        addon_id: 221,
        cost: "0.00",
        cost_name: "Upfront",
        cost_period: "upfront",
        addon_name: "BYO Modem"
    },
    
]
let arr2 = [
    {
        id: 23,
        name: "Home Phone Plan",
      
    }
]

let isFounded = arr1.find( ai => arr2.filter((a) => a.id===ai.addon_id) );

console.log("is Found",isFounded)
