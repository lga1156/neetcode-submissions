class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = -1
        let l = 0;
        let r = heights.length - 1;
        while (l<r) {
            let area = (r-l) * Math.min(heights[l],heights[r])
            maxArea = Math.max(maxArea, area);
            if (heights[l]<heights[r]) {
                l++;
                continue;
            } else {
                r--;
            }
        }

        return maxArea
    }
    // [1,7,2,5,12,3,500,500,7,8,4,7,3,6]
    // output 72; excepted 500
}
