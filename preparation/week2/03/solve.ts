function flippingBits(n: number): number {
    const uint32 = new Uint32Array(1)
    uint32[0] = ~n;
    return uint32[0]
}

console.log(flippingBits(2147483647))


