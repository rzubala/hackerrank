function icecreamParlor(m: number, arr: number[]): number[] {
    const stats = {}
    const filtered = arr.filter(p => p < m)
    for (let i=0;i<filtered.length - 1;i++) {
        for (let j=i+1;j<filtered.length;j++) {
            if (filtered[i] + filtered[j] === m) {
                const index1 = arr.indexOf(filtered[i])
                let index2 = arr.indexOf(filtered[j])
                while (index1 === index2) {
                    index2 = arr.indexOf(filtered[j], index2 + 1)
                }
                return [index1 + 1, index2 + 1]
            }
        }
    }
    throw new Error("something went wrong")
}