"use strict";
var arr = [5, 2, 3, 1];
function QuickSort(numbers) {
  function swap(left, right) {
    var _a;
    (_a = [arr[right], arr[left]]), (arr[left] = _a[0]), (arr[right] = _a[1]);
  }
  function sort(start, end) {
    if (start >= end) {
      return;
    }
    var pivot = ((end - start) / 2) >> 0;
    var left = start;
    var right = end;
    while (left < right) {
      while (left < pivot && numbers[left] < numbers[pivot]) {
        left++;
      }
      while (right > pivot && numbers[right] > numbers[pivot]) {
        right--;
      }
      if (left < right) {
        swap(left, right);
        left++;
        right--;
      }
    }
    sort(start, pivot - 1);
    sort(pivot + 1, end);
  }
  sort(0, numbers.length - 1);
}
console.log(QuickSort(arr));
