/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

  for(let i =0; i<=nums.length; i++ ){
    for(let j=i+1; j<=nums.length; j++){
      if(nums[i] + nums[j] === target){
        return [i, j]
      }
    }
  }
  return null
};

var twoSum = function(nums, target) {

  for(let i =0; i<=nums.length; i++ ){
    const diff = target - nums[i];
    const index = nums.findIndex(item => item === diff);
    if(index !== -1 ){
      return [i, index]
    }
  }
  return null
};
// @lc code=end

