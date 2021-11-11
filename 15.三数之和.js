/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let len = nums.length;
  let result = [];
  for (let i = 0; i <= len - 3; i++) {
    for (let j = i + 1; j <= len - 2; j++) {
      for (let k = j + 1; k <= len - 1; k++) {
        let total = nums[i] + nums[j] + nums[k];
        if (total === 0) {
          let arr = [nums[i], nums[j], nums[k]];
          arr.sort();
          let filters = result.filter(item => {
            let copyList = JSON.parse(JSON.stringify(item));
            copyList.sort();
            return arr.join(',') === copyList.join(',');
          });
          if (filters.length === 0) {
            result.push([nums[i], nums[j], nums[k]]);
          }

        }


      }


    }

  }
  return result

};
// @lc code=end

