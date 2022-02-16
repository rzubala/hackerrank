function diagonalDifference(arr: number[][]): number {
    const s = arr.length;
    let sum1 = 0, sum2 = 0
    for (let y=0;y<s;y++) {
        console.log(arr[y][y], arr[y][s-1-y])
        sum1 += arr[y][y]
        sum2 += arr[y][s-1-y]
    }
    return Math.abs(sum1 - sum2)
}

console.log(diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]))