class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphaNumeric = (char) => {
            return /[a-z0-9]/i.test(char);
        };

        let t = s.toLowerCase();
        let left = 0;
        let right = t.length - 1;

        while (left < right) {
            if (!isAlphaNumeric(t[left])) {
                left++;
                continue;
            }

            if (!isAlphaNumeric(t[right])) {
                right--;
                continue;
            }

            if (t[left] !== t[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}