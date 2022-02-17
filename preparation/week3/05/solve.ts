
/*
Choose the one with the longest maximum side.
If more than one has that maximum, choose from them the one with the longest minimum side.
If more than one has that maximum as well, print any one them.
*/

const isTriangle = (a: number, b: number, c: number): boolean => {
    return (a + b > c) && (a + c > b) && (b + c > a)
}

function maximumPerimeterTriangle(sticks: number[]): number[] {
    sticks.sort((a,b)=>a-b)
    const len = sticks.length

    let maxperimeter = -1
    let longestTriangle: [number, number, number];

    for (let i=0;i<len-2;i++) {
        for (let j=i+1;j<len-1;j++) {
            for (let k=j+1;k<len;k++) {
                if (!isTriangle(sticks[i], sticks[j], sticks[k])) {
                    continue
                }
                let sum = sticks[i] + sticks[j] + sticks[k]
                if (sum > maxperimeter) {
                    maxperimeter = sum
                    longestTriangle = [sticks[i], sticks[j], sticks[k]]
                } else if (sum === maxperimeter && sticks[i] < longestTriangle[0]) {
                    longestTriangle = [sticks[i], sticks[j], sticks[k]]
                }
            }
        }
    }
    if (!longestTriangle) {
        return [-1]
    }
    return longestTriangle
}
console.log(maximumPerimeterTriangle([1,2,3,4,5,10]))