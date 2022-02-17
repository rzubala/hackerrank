interface BirdStat {
    [key: number]: number
}

function migratoryBirds(arr: number[]): number {
    const stats: BirdStat = {}
    for (let b of arr) {
        const cnt = stats[b] | 0
        stats[b] = cnt + 1
    }
    let maxId = -1
    let max = -1
    for (let k of Object.keys(stats)) {
        const val = stats[+k]
        if (val > max) {
            max = val
            maxId = +k
        }
        if (val === max) {
            maxId = Math.min(+k, maxId)
        }
    }
    return maxId
}
console.log(migratoryBirds([1,1,2,2,3]), 1)
console.log(migratoryBirds([1,1,2,2,2,3]), 2)