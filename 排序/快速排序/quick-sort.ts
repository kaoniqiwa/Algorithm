export {};

// 5,2,3,1
let arr = [5, 1, 1, 2, 0, 0];

function QuickSort(numbers: number[]) {
  function swap(left: number, right: number) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }
  function sort(start: number, end: number) {
    if (start >= end) {
      return;
    }
    let pivot = numbers[((end - start) / 2) >> 0]; // 3
    let left = start;
    let right = end;
    for (let i = start; i < end; i++) {
      if (numbers[i] <= pivot) {
      } else if (numbers[i] > pivot) {
        numbers.push();
      }
    }
  }

  sort(0, numbers.length);
}

console.log(QuickSort(arr));
