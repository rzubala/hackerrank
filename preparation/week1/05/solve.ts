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

interface OperationMap {
    [key: string]: (type: string, value: string) => void
}
const operations: OperationMap = {
    "S": split,
    "C": combine
}

function main() {
    while (true) {
        const input = readLine()
        if (!input) {
            break
        }
        const arr = input.split(";")
        operations[arr[0]](arr[1], arr[2])
    }
}

function split(type: string, input: string) {
    const fc = input.charAt(0)
    if (fc === fc.toUpperCase()) {
        input = fc.toLowerCase() + input.slice(1)
    }
    input = input.replace("()", "").replace(/([A-Z])/g, ' $1').toLocaleLowerCase()
    console.log(input)
}

function combine(type: string, input: string) {
    const words = input.split(' ')
    const wordsConverted = words.map((word: string, index: number) => {
        if (index === 0 && type !== 'C') {
            return word
        }
        let newWord =  word[0].toUpperCase() + word.slice(1)
        if (type === 'M' && index === words.length - 1) {
            newWord = newWord.trim() + "()"
        }
        return newWord;
    })
    const res = wordsConverted.join('')
    console.log(res)
}

/*
Input (stdin)
S;V;iPad
C;M;mouse pad
C;C;code swarm
S;C;OrangeHighlighter

Expected Output
i pad
mousePad()
CodeSwarm
orange highlighter
*/