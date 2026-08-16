class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
    function isLetter(ch) {
        return ch.toLowerCase() !== ch.toUpperCase() || (ch >= '0' && ch <= '9');
    }

    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        if (!isLetter(s[l])) { l++; continue; }
        if (!isLetter(s[r])) { r--; continue; }

        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
        l++;
        r--;
    }
    return true;
}
}
