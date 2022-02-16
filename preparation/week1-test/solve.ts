function findMedian(arr: number[]): number {
    const mid = Math.floor(arr.length / 2)
    arr.sort((a: number, b: number) => a - b);
    return arr[mid]
}

console.log(findMedian([0, 1, 2, 4, 6, 5, 3]))