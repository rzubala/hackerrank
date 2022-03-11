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
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function superReducedString(s: string): string {
    let stack: Array<String> = []
    for (let i of s.split("")) {
        if (stack.length === 0) {
            stack.push(i)
        } else if (i === stack[stack.length - 1]) {
            stack.pop()
        } else {
            stack.push(i)
        }
    }
    return stack.length === 0 ? "Empty String" : stack.join("")
}

function superReducedString1(s: string): string {
    let arr: Array<String> = s.split("")
    let stack: Array<String> = []
    while (true) {
        for (let i=0;i<arr.length;i++) {        
            if (i === arr.length - 1){
                stack.push(arr[i])
                continue
            }
            if (arr[i] === arr[i + 1]) {
                i++
                continue
            }
            stack.push(arr[i])
        }
        if (arr.length === stack.length) {
            break
        }
        arr = [...stack]
        stack = []         
    }
    return stack.length === 0 ? "Empty String" : stack.join("")
}

function main() {

    const s: string = readLine();

    const result: string = superReducedString(s);
    console.log(result)
}
