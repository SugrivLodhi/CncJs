const calc = (n) => {
        let sum = 0
        for (let i = 0; i <= n; i++) {
            sum += i;
        }
        return sum
    }
    // const memoise = (fun) => {
    //     const cache = {}
    //     return (...arg) => {
    //         if (arg.toString() in cache) {
    //             console.log("memoised funtion call")
    //             return cache[arg.toString()];
    //         }
    //         console.log("first time function call")
    //         let result = fun(...arg)
    //         cache[arg.toString()] = result
    //         console.log('cach object', cache);
    //         return result

//     }

// }

const memoise = (fun) => {
    const cache = {}
    return function(...arg) {
        let n = arg[0]
        if (n in cache) {
            console.log("memoised funtion call")
            return cache[n];
        }
        console.log("first time function call")
        let result = fun(n)
        cache[n] = result
        console.log('cach object', cache);
        return result

    }

}

const memo = memoise(calc);
console.time()
console.log(memo(5))
console.timeEnd();
console.time()
console.log(memo(5))
console.timeEnd();
console.time()
console.log(memo(5))
console.timeEnd();