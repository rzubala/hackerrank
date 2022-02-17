interface StatsType {
    [key: number]: number
}

function sockMerchant(n: number, ar: number[]): number {
    const stats: StatsType = {}
    for (let i of ar) {
        let cnt = stats[i] | 0
        stats[i] = cnt + 1
    }
    console.log(stats)
    let pair = 0
    for (let key of Object.keys(stats)) {
        pair += Math.floor(stats[key] / 2)
    }
    return pair;
}
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))