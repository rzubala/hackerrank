function miniMaxSum(arr: number[]): void {
    const len = arr.length
    arr.sort()
    const sum: bigint = arr.reduce((acc: bigint, cur: number) => {
        return acc + BigInt(cur)
    }, BigInt(0));
    const max = sum - BigInt(arr[0])
    const min = sum - BigInt(arr[len - 1])
    console.log(min + " " + max)
}

miniMaxSum([1, 2, 3, 4, 5])
