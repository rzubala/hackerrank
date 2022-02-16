function divisibleSumPairs(n: number, k: number, ar: number[]): number {
    let cnt = 0
    ar.slice(0, n-1).forEach((x:number,i: number) => {
        for (let y of ar.slice(i + 1, n)) {
            if ((x + y) % k === 0) {
                cnt++
            }
        }
    })
    return cnt
}

console.log(divisibleSumPairs(6, 5, [1,2,3,4,5,6]))