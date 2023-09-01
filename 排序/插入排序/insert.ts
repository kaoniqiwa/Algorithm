export {};

/**
 * T(n)=O(fn)
 * 平均时间复杂度:O(n^2)
 * 最好情况:O(n)
 * 最坏情况:O(n^2)
 * 空间复杂度:O(1)
 * 算法逻辑:
 * 将第一个元素看作有序数列，遍历剩余序列，找到适当位置，插入到有序数列中
 */

function ascend1() {
  let arr = [5, 4, 3, 2, 1];
  let len = arr.length;
  let preIndex;
  let cur;
  /**第一项看作有序序列，剩余项寻找插入位置 */
  for (let i = 1; i < len; i++) {
    /** [0-preIndex]一定是有序升序序列 */
    preIndex = i - 1;
    /** 将 arr[i] 取出来之后，可将 arr[i] 视为空的，等待填充*/
    cur = arr[i];

    /**
     * 有序序列在剩余序列左侧，将 cur 视为空，以此来右移有序序列
     */
    while (preIndex >= 0 && arr[preIndex] > cur) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = cur;
  }
  console.log(arr);
}
ascend1();

function ascend2() {
  let arr = [5, 4, 3, 2, 1];
  let len = arr.length;
  let preIndex;
  let cur;

  /** 最后一项看作有序序列，剩余项寻找插入位置 */
  for (let i = len - 2; i >= 0; i--) {
    preIndex = i + 1;
    cur = arr[i];
    /** 有序序列在剩余序列右侧，将 cur 视为空，以此来左移序列 */
    while (preIndex <= len - 1 && arr[preIndex] < cur) {
      arr[preIndex - 1] = arr[preIndex];
      preIndex++;
    }
    arr[preIndex - 1] = cur;
  }
  console.log(arr);
}

ascend2();

function descend1() {
  let arr = [1, 2, 3, 4, 5];
  let len = arr.length;
  let preIndex;
  let cur;
  /**第一项看作有序序列 */
  for (let i = 1; i < len; i++) {
    cur = arr[i];
    preIndex = i - 1;
    while (preIndex >= 0 && arr[preIndex] < cur) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = cur;
  }
  console.log(arr);
}

descend1();

function descend2() {
  let arr = [1, 2, 3, 4, 5];
  let len = arr.length;
  let preIndex;
  let cur;
  /** 最后一项看作有序序列 */
  for (let i = len - 2; i >= 0; i--) {
    cur = arr[i];
    preIndex = i + 1;
    while (preIndex < len && arr[preIndex] > cur) {
      arr[preIndex - 1] = arr[preIndex];
      preIndex++;
    }
    arr[preIndex - 1] = cur;
  }
  console.log(arr);
}

descend2();
