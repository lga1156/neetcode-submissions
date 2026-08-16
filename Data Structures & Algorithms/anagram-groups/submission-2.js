class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = new Map();
        for (const word of strs) {
            let sortedWord = word.split('').sort().join('');
            if (!anagrams.has(sortedWord)) {
                anagrams.set(sortedWord, [])
            }
            anagrams.get(sortedWord).push(word)
        }

        return [...anagrams.values()]
    }
}
