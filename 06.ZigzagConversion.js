const ZigzagConversion = (str, numRows) => {
  console.log(performance.now());
  if (str <= 1) return str;
  if (numRows === 1) return str;

  let obj = { 0: str[0] };

  let reverse = false;
  let actual = 1;

  for (let i = 1; i < str.length; i++) {
    if (actual === 0 || actual === numRows - 1) reverse = !reverse;

    const letter = str[i];
    obj[actual] = obj[actual] ? `${obj[actual]}${letter}` : letter;

    if (reverse) {
      actual--;
      continue;
    }
    actual++;
  }
  console.log(performance.now());
  return Object.values(obj).join("");
};
