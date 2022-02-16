interface ResultStat {
    [key: string]: number
}

function matchingStrings(strings: string[], queries: string[]): number[] {
    const results = []
    const stats: ResultStat = {}
    let curStrings = [...strings]
    for (let query of queries) {
        if (stats[query] !== undefined) {
            results.push(stats[query])
            continue
        }
        let cnt = 0;
        const tmpStrings = []
        for (let input of curStrings) {
            if (query === input) {
                cnt++
            } else {
                tmpStrings.push(input)
            }
        }
        results.push(cnt)
        stats[query] = cnt
        curStrings = [...tmpStrings]
    }
    return results
}

console.log(matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"]))
