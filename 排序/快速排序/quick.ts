export {};

/**
 * T(n)=O(fn)
 * 平均时间复杂度:O(nlogn)
 * 最好情况:O(nlogn)
 * 最坏情况:O(n^2)
 * 空间复杂度O(logn)
 * 排序方式:in-place
 * 稳定性:不稳定
 * 算法逻辑:
 * 1. 从序列中选择一个元素，作为基准=
 * 2. 重新排列序列，所有比基准小的排在前面，比基准大的，排在后面
3. 递归的对前面的序列和后面的序列排序

 */
