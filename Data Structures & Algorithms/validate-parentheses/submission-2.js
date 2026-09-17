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
                if (pairs[char] !== stack.pop()) {
                    return false
                }
            }
        }
        return stack.length === 0;
    }
}
