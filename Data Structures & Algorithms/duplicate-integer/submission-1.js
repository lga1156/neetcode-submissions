class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();
        for (const i of nums) {
            map.set(i, (map.get(i) || 0 ) + 1);
        }

        for (const [key,] of map) {
            if (map.get(key) > 1) {
                return true
            }
        }
        return false
    }
}
