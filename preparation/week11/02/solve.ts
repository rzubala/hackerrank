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
 * Complete the 'commonChild' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function commonChild(s1: string, s2: string): number {
    //Longest common subsequence problem
    const len = s1.length;
    const lcs = Array.from({ length: len + 1 }, () => Array.from({ length: len + 1 }, () => 0));
    for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= len; j++) {
          if (s1[i - 1] === s2[j - 1]) {
            lcs[i][j] = 1 + lcs[i - 1][j - 1];
          } else {
            lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
          }
        }
      }
      return lcs[len][len];
}

function main() {  

    const s1: string = readLine();

    const s2: string = readLine();

    const result: number = commonChild(s1, s2);

    console.log(result);
}
