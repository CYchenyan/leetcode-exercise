/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

  if (nums.length === 1) {
    return nums[0]
  }
  return helper(nums, 0, nums.length - 1)
};

const helper = function (nums, left, right) {
  if (left === right) {
    return nums[left]
  }
  let mid = Math.floor((left + right) / 2)
  const leftSum = helper(nums, left, mid)
  const rightSum = helper(nums, mid + 1, right)
  const crossSum1 = crossSum(nums, left, right, mid)
  return Math.max(Math.max(leftSum, rightSum), crossSum1)
}

const crossSum = function (nums, left, right, mid) {
  if (left === right) {
    return nums[left]
  }

  let leftSubSum = Number.MIN_VALUE;
  let currSum = 0;
  for(let i = mid; i > left -1; i--){
    currSum += nums[i]
    leftSubSum = Math.max(leftSubSum, currSum)
  }

  let rightSubSum = Number.MIN_VALUE;
  currSum = 0;
  for(let i=mid+1; i<right+1;i++){
    currSum += nums[i]
    rightSubSum = Math.max(rightSubSum, currSum)
  }

  return leftSubSum + rightSubSum
}

// @lc code=end 

