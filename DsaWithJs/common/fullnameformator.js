 const formatFullName = (firstName, middleName, lastName) => {
    const first = firstName || ''
    const middle = middleName || ''
    const last = lastName || ''
    return `${first.trim()} ${middle.trim()} ${last.trim()}`.replace(/\s+/g, ' ').trim()
  }
console.log("full name",formatFullName("Sugriv","Lodhi","Cimet"))  