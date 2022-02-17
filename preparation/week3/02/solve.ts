function birthday(s: number[], d: number, m: number): number {    
    // if (m === 1) {
    //     return s.filter(v => v === d).length
    // } else if (m === s.length) {
    //     const sum = s.reduce((a, v) => {
    //         a += v
    //         return a
    //     }, 0)
    //     if (sum === d) {
    //         return 1
    //     }         
    //     return 0
    // }

    let cnt = 0
    for (let i=0;i<s.length-m + 1;i++) {        
        let sum = s[i]
        for (let j=i+1;j<i + m;j++) {
            sum += s[j]            
            if (sum > d) {
                break
            }
        }
        if (sum === d) {
            cnt++
        }      
    }
    return cnt
}

console.log(birthday([2,2,1,3,2], 6 , 3), 2)
console.log(birthday([2,2,1,3,2], 4 , 2), 2)
console.log(birthday([4,1], 4, 1), 1)
console.log(birthday([4,1], 5, 2), 1)