
function breakingRecords(scores: number[]): number[] {
    let min = scores[0], max = scores[0]
    let minCnt = 0, maxCnt = 0
    for (let score of scores.slice(1)) {
        if (score < min) {
            min = score
            minCnt++
        }
        if (score > max) {
            max = score
            maxCnt++
        }
    }
    return [maxCnt, minCnt]
}
