function stockmax(prices: number[]): number {
  let result = 0;
  let currentMax = prices.pop()!;
  while (prices.length) {
    let currentPrice = prices.pop()!;
    if (currentPrice >= currentMax) {
      currentMax = currentPrice;
    } else {
        const currentProfit = currentMax - currentPrice
        result += currentProfit;
    }
  }
  return result;
}
