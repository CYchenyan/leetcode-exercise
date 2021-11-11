/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const num = Math.abs(x)
  const string =  num.toString().split('').reverse().join('')

  const result =  x < 0 ? Number(`-${string}`) : Number(string)

  return result > Math.pow(2, 31) -1 || result < -Math.pow(2, 31) ? 0 :result
};
// @lc code=end

