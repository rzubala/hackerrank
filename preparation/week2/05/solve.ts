function countingSort(arr: number[]): number[] {
    const initial = Array(100).fill(0)
    const stats = arr.reduce((acc: number[], value: number, index: number) => {
        acc[value] = acc[value] + 1
        return acc
    }, initial)
    return stats
}

const arr = [1,1,3,2,1]
console.log(countingSort(arr))