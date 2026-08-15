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

        for (const letter of s) {
            freqS.set(letter, (freqS.get(letter) || 0) + 1)
        }
        
        for (const letter of t) {
            freqT.set(letter, (freqT.get(letter) || 0) + 1)
        }

        for (const [key, value] of freqS) {
            if (freqT.get(key) !== value) {
                return false
            }
        }
        return true
    }
}
