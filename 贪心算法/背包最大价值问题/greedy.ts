export {};

/**
 * 有一个背包，最多能承载重量为 C=150的物品，
 * 现在有7个物品（物品不能分割成任意大小），编号为 1~7，
 * 重量分别是 wi=[35,30,60,50,40,10,25]，
 * 价值分别是 pi=[10,40,30,50,35,40,30]，
 * 现在从这 7 个物品中选择一个或多个装入背包，要求在物品总重量不超过 C 的前提下，所装入的物品总价值最高
 **/
const C = 150;
const wi = [35, 30, 60, 50, 40, 10, 25];
const pi = [10, 40, 30, 50, 35, 40, 30];
// const wi = [50, 10, 30, 40, 25, 60, 35];
// const pi = [50, 40, 40, 35, 30, 30, 10];

// let totalW = 0;
// let totalP = 0;
// let res: number[][] = [];

// for (let i = 0; i < pi.length; i++) {
//   let l = C - totalW;
//   if (l > wi[i]) {
//     totalW += wi[i];
//     totalP += pi[i];
//     res.push([pi[i], wi[i]]);
//   } else if (l == wi[i]) {
//     totalW += wi[i];
//     totalP += pi[i];
//     res.push([pi[i], wi[i]]);
//     break;
//   } else {
//     // 物品能重复,如果不重复，直接 for 循环中 i++
//     // i++;
//     break;
//   }
// }
// console.log(res, totalP);

function greedy1(wi: number[], pi: number[]) {
  let sorted: number[] = [pi[0]];
  let ss: number[] = [wi[0]];

  for (let i = 1; i < pi.length; i++) {
    for (let j = 0; j < sorted.length; j++) {
      let s = sorted[j];
      if (pi[i] >= s) {
        sorted.splice(j, 0, pi[i]);
        ss.splice(j, 0, wi[i]);
        j += 1;
        break;
      }
    }
  }
  console.log(sorted, ss);
}

// // [10, 40, 30, 50, 35, 40, 30]
greedy1(wi, pi);

/**
 * sorted   []
 *  p       10      40       30
 *  sorted  [10]    [40,10]  [40,30,10]
 */
