class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false;

        const freqS = new Map();
        const freqT = new Map();

        for (const char of s) {
            freqS.set(char, (freqS.get(char) || 0) + 1)
        }

        for (const char of t) {
            freqT.set(char, (freqT.get(char) || 0) + 1)
        }

        for (const [key,value] of freqS) {
            if (freqT.get(key) !== value) {
                return false
            }
        }
        return true
    }
}
