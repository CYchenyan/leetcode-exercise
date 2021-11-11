/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) return false
  const strArr = x.toString().split('')
  let result = true

  for(let i =0 ; i<strArr.length / 2; i++){
      if(strArr[i] !== strArr[strArr.length - i -1]){
        result = false
        break;
      }
  }

  return result

};
// @lc code=end

