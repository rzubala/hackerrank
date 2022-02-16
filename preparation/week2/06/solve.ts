function countingValleys(steps: number, path: string): number {
    const arr = path.split("")
    let lvl = 0
    let v = 0
    for (let step of arr) {
        if (step === 'U') {
            lvl++
            if (lvl === 0) {
                v++
            }
        } else {
            lvl--
        }
    }
    return v
}

console.log(countingValleys(8, "UDDDUDUU"))