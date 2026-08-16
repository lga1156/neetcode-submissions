class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isLetter(char) {
            return char.toLowerCase() !== char.toUpperCase() || (char >= '0' && char <= '9')
        }

        let lowerS = s.toLowerCase()
        let l = 0;
        let r = lowerS.length - 1;

        while (l<r) {
            if (!isLetter(lowerS[l])) {
                l++;
                continue;
            }

            if (!isLetter(lowerS[r])) {
                r--;
                continue;
            }

            if (lowerS[l] !== lowerS[r]) {
                return false
            }
            l++;
            r--;
        }
        return true;
    }
}
