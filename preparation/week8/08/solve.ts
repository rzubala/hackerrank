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
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

interface BracketMap {
    [key: string]: string;
}

const bracketMap: BracketMap = {
    ")": "(",
    "}": "{",
    "]": "["
}

function isBalanced(s: string): string {
    if (!s) {
        return "NO"
    }
    const stack: Array<String> = []
    for (let c of s.split("")) {
        if (Object.values(bracketMap).includes(c)) {
            stack.push(c)
        } else if (Object.keys(bracketMap).includes(c)) {
            const lastOpened = stack.pop()
            if (bracketMap[c] !== lastOpened) {
                return "NO"
            }
        } else {
            throw new Error("Something went wrong")
        }
    }
    return stack.length > 0 ? "NO" : "YES"
}

function main() {
    const t: number = parseInt(readLine().trim(), 10);

    for (let tItr: number = 0; tItr < t; tItr++) {
        const s: string = readLine();

        const result: string = isBalanced(s);

        console.log(result)
    }
}
