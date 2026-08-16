class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indicies = new Map();
        for (let num = 0; num < nums.length; num++) {
            let diff = target - nums[num];
            if (indicies.has(diff)) {
                return [num, indicies.get(diff)]
            }
            indicies.set(nums[num], num)
        }
    }
}
