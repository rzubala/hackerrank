function twoArrays(k: number, A: number[], B: number[]): string {
    const A1 = A.sort((a,b) => a-b)
    const B1 = B.sort((a,b) => b-a)

    let i =0 
    for (let a of A1) {
        if (a + B1[i++] < k) {
            return "NO"
        }
    }
    return "YES"
}

console.log(twoArrays(4, [2,1,3], [7,8,9]))
console.log(twoArrays(5, [1,2,2,1], [3,3,3,4]))