const obj = [{ id: 1, name: 'sugriv', lastName: 'Lodhi', address: 'sdr' },
        { id: 2, name: 'Rpy', lastName: 'Lodhi', address: 'sdr' },
        { id: 3, name: 'Pk', lastName: 'Lodhi', address: 'sdr' }
    ]
    //console.log(Object.keys(obj).length)
    //Useing Destrucring we can use Map function
    // const allData = obj.map(({ name, address }) => {
    //     return (name)
    // })

// console.log(allData)
const allData = obj.map((data) => data.filter((item) => {
    return item.include(s)
}))