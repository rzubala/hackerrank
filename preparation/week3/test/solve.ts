const isFactor = (x: number, y: number) => x % y === 0

function getTotalX(a: number[], b: number[]): number {
  const results = []
  const n = a.length
  const rfrom = a[n-1]
  const rto = b[0]
  for (let x=rfrom;x<=rto;x++) {
    if (a.every(f => isFactor(x,f)) && b.every(f => isFactor(f,x))) {
      results.push(x)  
    } 
  }  
  return results.length
}