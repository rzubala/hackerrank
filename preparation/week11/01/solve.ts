'use strict';

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
 * Complete the 'solve' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER_ARRAY queries
 */

function solve(arr: number[], queries: number[]): number[] {
    const len = arr.length
    const result = []
    for (let q of queries) {
        const tempArr = []
        let lmax: number = 0
        let resetWindow = false
        for (let i=0;i<=len - q;i++) {         
            if (i === 0 || resetWindow) {
                const subarr = arr.slice(i, i+q)
                lmax = subarr.reduce((a1, a2) => {
                    return a1 >= a2 ? a1 : a2
                })            
            } else {
                lmax = Math.max(lmax, arr[i+q-1])
            }
            tempArr.push(lmax)
            resetWindow = arr[i] === lmax
        }
        result.push(tempArr.reduce((a1, a2) => {
            return a1 <= a2 ? a1 : a2
        }))
    }
    return result
}

function solve1(arr: number[], queries: number[]): number[] {
    const result = [];
    for (let i = 0; i < queries.length; i++) {
      const windowSize = queries[i];
      const tempArr = [];
      let isMaxAtBeginning = false;
      let max = 0;
      for (let j = 0; j < arr.length; j++) {
        let window;
        if (windowSize + j <= arr.length) {
          if (j === 0 || isMaxAtBeginning) {
            window = arr.slice(j, j + windowSize);
            max = window.reduce((a, b) => (a >= b ? a : b));
          }
          else {
            max = Math.max(max, arr[j + windowSize - 1]);
          }
          tempArr.push(max);
          isMaxAtBeginning = max === arr[j];
        }
      }
      result.push(tempArr.reduce((a, b) => (a <= b ? a : b)));
    }
    return result;
}

function main() {

    const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const n: number = parseInt(firstMultipleInput[0], 10);

    const q: number = parseInt(firstMultipleInput[1], 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let queries: number[] = [];

    for (let i: number = 0; i < q; i++) {
        const queriesItem: number = parseInt(readLine().trim(), 10);

        queries.push(queriesItem);
    }

    const result: number[] = solve(arr, queries);

    console.log(result)
}
