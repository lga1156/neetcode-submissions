class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pairs = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        for (const char of s) {
            if (!(char in pairs)) {
                stack.push(char)
            } else {
                if (stack.pop() !== pairs[char]) {
                    return false
                }
            }
        }

        if (stack.length !== 0) return false
        return true
    }

}
