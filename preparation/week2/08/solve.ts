function marsExploration(s: string): number {
    const arr = s.split("")
    return arr.reduce((acc: number, val: string, index: number) => {
        if (val !== "S" && (index % 3 === 0 || index % 3 === 2) 
            || val !== "O" && index % 3 === 1) {
                acc++
        }
        return acc
    }, 0)
}

console.log(marsExploration("SOSSPSSQSSOR"))