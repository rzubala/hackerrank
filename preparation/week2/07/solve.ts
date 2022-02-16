function pangrams(s: string): string {    
    const a = 'a'.charCodeAt(0)
    const z = 'z'.charCodeAt(0)
    const len = z - a + 1
    const stats = s.toLowerCase().split('').reduce((acc: number[], val: string) => {
        const v = val.charCodeAt(0)
        if (v < a || v > z) {
            return acc
        }
        const index = v - a
        acc[index] = acc[index] + 1
        return acc
    }, Array(len).fill(0))    
    const result = stats.find(v => v === 0)
    if (result === undefined) {
        return "pangram"
    } else {
        return "not pangram"
    }   
}

console.log(pangrams("We promptly judged antique ivory buckles for the prize"))
console.log(pangrams("We promptly judged antique ivory buckles for the next prize"))
console.log(pangrams("The quick brown fox jumps over the lazy dog"));