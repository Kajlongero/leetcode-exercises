/**
 * @param {string} str
 * @return {string}
 */

const LongestPalindromicSubstring = (str) => {
  let res = "";

  const expandFromCenter = (left, right) => {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left -= 1;
      right += 1;
    }
    return str.substring(left + 1, right);
  };

  for (let i = 0; i < str.length; i++) {
    const substr1 = expandFromCenter(i, i);
    const substr2 = expandFromCenter(i, i + 1);

    if (substr1.length > res.length) res = substr1;
    if (substr2.length > res.length) res = substr2;
  }

  return res;
};

console.log(LongestPalindromicSubstring("a"));
