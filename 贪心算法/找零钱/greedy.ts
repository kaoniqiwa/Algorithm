export {};

/**
 * 假设你开了间小店，不能电子支付，钱柜里的货币只有 25 分、10 分、5 分和 1 分四种硬币，
 * 如果你是售货员且要找给客户 41 分钱的硬币，如何安排才能找给客人的钱既正确且硬币的个数又最少？
 */
let sumMoney = 41;

const TWEENTYFIVE = 25;
const TEN = 10;
const FIVE = 5;
const ONE = 1;

let res: number[] = [];
while (sumMoney) {
  if (sumMoney >= TWEENTYFIVE) {
    res.push(TWEENTYFIVE);
    sumMoney -= TWEENTYFIVE;
    continue;
  }
  if (sumMoney >= TEN) {
    res.push(TEN);
    sumMoney -= TEN;
    continue;
  }
  if (sumMoney >= FIVE) {
    res.push(FIVE);
    sumMoney -= FIVE;
    continue;
  }
  if (sumMoney >= ONE) {
    res.push(ONE);
    sumMoney -= ONE;
    continue;
  }
}
console.log(res);
