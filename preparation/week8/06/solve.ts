'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

interface AnagramStats {
    [key: string]: number
}

function sherlockAndAnagrams(s: string): number {
    const stats: AnagramStats = {}
    const len = s.length
    for (let l=1;l<len;l++) {
        for (let i=0;i<=len-l;i++) {
            const substr = s.slice(i, i + l).split('').sort().join('')
            stats[substr] = (stats[substr] || 0) + 1
            console.log(l, i, substr)
        }
    }
    return Object.values(stats).reduce((a, n) => {        
        if (n === 1) {
            return a
        }
        const sum = n*((n-1)/2) //(n / 2)(first number + last number) = sum, where n is the number of integers.
        return a + sum
    }, 0)
}

function main() {
    const q: number = parseInt(readLine().trim(), 10);

    for (let qItr: number = 0; qItr < q; qItr++) {
        const s: string = readLine();

        const result: number = sherlockAndAnagrams(s);

        console.log(result);
    }
}
