/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const join = digits.join("");

  const stringified = String(BigInt(join) + 1n);
  const splited = stringified.split("");

  return splited.map((elem) => parseInt(elem));
};

console.log(plusOne([1, 2, 3]));
