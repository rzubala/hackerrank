'use strict';

function plusMinus(arr: number[]): void {
    const len = arr.length
    const stats = {n: 0, z: 0, p: 0}
    for (let item of arr) {
        if (item > 0) {
            stats.p++;
        } else if (item < 0) {
            stats.n++;
        } else {
            stats.z++;
        }        
    }
    printNumber(stats.p/len, 6)
    printNumber(stats.n/len, 6)
    printNumber(stats.z/len, 6)
}

function printNumber(value: number, decimalPlaces: number) {
    console.log(Number(Math.round(parseFloat(value + 'e' + decimalPlaces)) + 'e-' + decimalPlaces).toFixed(decimalPlaces))
}
