class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freq = new Map();
        for (const num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1)
        }
        for (const [key,] of freq) {
            if (freq.get(key) > 1) {
                return true
            }
        }
        return false;
    }
}
