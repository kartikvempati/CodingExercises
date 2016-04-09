function getMaxProfit(prices) {
  var min = prices[0];
  var profit = prices[1] - prices[0]
  for (var i = 1; i < prices.length; i++) {
    if (prices[i] - min > profit) {
      profit = prices[i] - min;
    }
    if (min > prices[i]) {
      min = prices[i]
    }
  }
  return profit;
}








var stockPricesYesterday = [30, 10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)
