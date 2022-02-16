function lonelyinteger(arr: number[]): number {
    if (arr.length === 1) {
        return arr[0]
    }
    arr.sort((a,b) => a - b)
    let last = arr[0]
    console.log(arr)
    for (let i=1;i<arr.length;i++) {
        if (i === arr.length - 1){
            if (arr[i] === last) {
                throw new Error("something went wrong: Last!")
            }
            return arr[i]
        } 
        if (last === arr[i]) {
            last = arr[i]
            continue;
        }  
        if (arr[i] === arr[i+1]) {
            i++;
            last = arr[i]
            continue;
        }
        return arr[i]
    }
    throw new Error("something went wrong!")
}

console.log(lonelyinteger([1,2,3,4,3,2,1]))
console.log(lonelyinteger([1,2,3,4,4,2,1]))