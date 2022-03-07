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

class Queue {
    _dataIn: number[]
    _dataOut: number[]

    constructor() {
        this._dataIn = []
        this._dataOut = []
    }

    enqueue = (data: number): void => {
        this._dataIn.push(data)
    }

    dequeue = (): number => {
        this.populate()
        return this._dataOut.pop()
    }

    populate = () => {
        if (this._dataOut.length !== 0) {
            return
        }
        while (this._dataIn.length > 0) {
            this._dataOut.push(this._dataIn.pop())
        }
    }

    print = (): void => {
        this.populate()
        console.log(this._dataOut[this._dataOut.length - 1])
    }
}

function main() {
    let data: string[] = []
    while (true) {
        const input = readLine()
        if (!input) {
            break
        }
        data.push(input)
    }

    const queue = new Queue()
    for (const line of data.slice(1)) {
        const op = +line[0]
        switch(op) {
            case 1:
                queue.enqueue(+line.split(' ')[1])
                break;
            case 2:
                queue.dequeue()
                break;
            case 3:   
                queue.print()
                break     
        }        
    }
}