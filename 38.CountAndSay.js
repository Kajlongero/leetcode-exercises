/**
 * @param {number} n
 * @returns {string}
 */

/**
 * 1
 * 11
 * 21
 * 1211
 * 111221
 * 312211
 * 13112221
 * 1113213211
 * 31131211131221
 */

const countAndSay = (n) => {
  let initial = "1";

  let helper = (str) => {
    let temp = "";
    let actual = "";
    let counter = 0;
    let times = 0;

    while (counter < str.length) {
      if (!actual) {
        actual = str[counter];
        times++;
      }
      if (counter + 1 === str.length) {
        temp += `${times}${actual}`;
        break;
      }
      if (str[counter + 1] === actual) {
        times++;
      }
      if (str[counter + 1] !== actual) {
        temp += `${times}${actual}`;
        actual = "";
        times = 0;
      }
      counter++;
    }
    return temp;
  };
  for (let i = 1; i < n; i++) {
    initial = helper(initial);
  }
  return initial;
};

console.log(countAndSay(31));
