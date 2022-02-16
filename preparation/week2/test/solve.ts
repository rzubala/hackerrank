function flippingMatrix(matrix: number[][]): number {
    let sum=0;
    const len = matrix.length
    const n = len/2;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            sum += Math.max(...[matrix[i][j], matrix[i][len - 1 - j], matrix[len - 1 - i][j], matrix[len - 1 - i][len - 1 - j]])
        }
    }
    return sum;
}

let matrix = [[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]]
console.log(flippingMatrix(matrix)) //414

matrix = [[107, 54, 128, 15], [12, 75, 110, 138], [100, 96, 34, 85], [75, 15, 28, 112]]
console.log(flippingMatrix(matrix)) //488
