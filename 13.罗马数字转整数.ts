/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
    const map = new Map();
    map.set("I", 1);
    map.set("IV", 4);
    map.set("V", 5);
    map.set("IX", 9);
    map.set("X", 10);
    map.set("XL", 40);
    map.set("L", 50);
    map.set("XC", 90);
    map.set("C", 100);
    map.set("CD", 400);
    map.set("D", 500);
    map.set("CM", 900);
    map.set("M", 1000);

    let number = 0;
    for(let i=0; i<s.length;){
        if(i + 1 < s.length && map.get(s.substring(i, i+2))) {
            number += map.get(s.substring(i, i + 2))
            i += 2;
        } else {
            number += map.get(s.substring(i, i + 1))
            i++;
        }
    }
    return number;
};
// @lc code=end

