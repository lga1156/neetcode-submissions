class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = new Map();
        for (const word of strs) {
            const key = word.split('').sort().join('');
            if (!result.has(key)) {
                result.set(key, []);
            }
            result.get(key).push(word)
        }

        return [...result.values()]
    }
}
