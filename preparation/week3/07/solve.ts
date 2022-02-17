
function pageCount(n: number, p: number): number {
    const np = Math.floor(n/2)
    const pp = Math.floor(p/2)
    return Math.min(pp, np-pp)
}

console.log(pageCount(9, 5), 2)
