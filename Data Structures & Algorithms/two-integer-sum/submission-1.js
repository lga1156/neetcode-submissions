class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indicies = new Map();

        for (let i = 0; i < nums.length; i++) {
            const num = target - nums[i];
            if (indicies.has(num)) return [i,indicies.get(num)];
            indicies.set(nums[i], i)

        }
    }
}