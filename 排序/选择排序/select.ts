export {};

/**
 * T(n)=O(fn)
 * 平均时间复杂度:O(n^2)
 * 最好情况:O(n^2)
 * 最坏情况:O(n^2)
 * 空间复杂度:O(1)
 * 排序方式:in-place
 * 稳定性:不稳定
 * 算法逻辑:
 * 在未排序序列中找到最大/小值,移动到序列起始位置/结束位置
 */

/**找到最大值，移动到序列末尾, 遍历长度[0,i-1],i自减*/
function ascend1() {
  let arr = [5, 4, 3, 2, 1];
  let len = arr.length;

  for (let i = len - 1; i > 0; i--) {
    let max = i;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[max]) {
        max = j;
      }
    }
    [arr[max], arr[i]] = [arr[i], arr[max]];
  }
  console.log(arr);
}

ascend1();

/** 找到最小值，移动到序列头部，遍历长度[i+1,len-1],i自增 */
function ascend2() {
  let arr = [5, 4, 3, 2, 1];
  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[min], arr[i]] = [arr[i], arr[min]];
  }
  console.log(arr);
}

ascend2();

/** 找到最小值，移动到序列末尾*/
function descend1() {
  let arr = [1, 2, 3, 4, 5];
  let len = arr.length;

  for (let i = len - 1; i > 0; i--) {
    let min = i;
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[min], arr[i]] = [arr[i], arr[min]];
  }
  console.log(arr);
}

descend1();

/** 找到最大值，移动到序列头部*/
function descend2() {
  let arr = [1, 2, 3, 4, 5];
  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let max = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] > arr[max]) {
        max = j;
      }
    }
    [arr[max], arr[i]] = [arr[i], arr[max]];
  }
  console.log(arr);
}

descend2();
