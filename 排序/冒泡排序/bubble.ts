export {};

/**
 * T(n)=O(fn)
 * 平均时间复杂度:O(n^2)
 * 最好情况:O(n)
 * 最坏情况:O(n^2)
 * 空间复杂度:O(1)
 * 算法逻辑:
 * 比较相邻元素，大的往头部/尾部移动
 */
function ascend1() {
  let arr = [5, 4, 3, 2, 1];
  let len = arr.length;
  let count = 0;
  let flag = true;
  /**
   * 从左往右,将最大的往末尾移动,每次移动后，遍历长度减一(i--)
   * 由于需要两两比较，所以 i 最小到 1，j 最大到 len-2
   */
  for (let i = len - 1; i > 0; i--) {
    flag = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = false;
      }
      count++;
    }
    /** 如果循环之后，flag没有置为false,表示不需要交换，也就是当前数组已经是升序，不需要继续循环遍历 */
    if (flag) {
      break;
    }
  }
  console.log("ascend1", arr, count);
}
// ascend1();

/**
 * 从右往左，将最小的往头部移动，
 */
function ascend2() {
  let arr = [5, 4, 3, 2, 1];
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = len - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  console.log("ascend2", arr);
}
// ascend2();

/**
 * 从左往右，小的往末尾移动
 */
function descend1() {
  let arr = [1, 2, 3, 4, 5];
  let len = arr.length;
  for (let i = len - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log("descend1", arr);
}
// descend1();

/** 从右往左，大的往头部移动 */
function descend2() {
  let arr = [1, 2, 3, 4, 5];
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = len - 1; j > i; j--) {
      if (arr[j] > arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  console.log("descend2", arr);
}
// descend2();
