const PHONE_LETTERS = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};
const combs = (digits) => {
  if (typeof digits !== "string") return [];

  if (!digits.length) return [];
  if (digits.length === 1) return PHONE_LETTERS[digits[0]].split("");

  let actual = `${PHONE_LETTERS[digits[0]].split("").join("_ ")}_ `;

  const without = digits.substring(1);

  for (let i = 0; i < without.length; i++) {
    let str = "";
    const internal = PHONE_LETTERS[without[i]];

    for (let j = 0; j < internal.length; j++) {
      let comb = actual.replaceAll("_ ", `${internal[j]}_ `);
      str += comb;
    }
    actual = str;
  }
  return actual.split("_ ").filter((str) => str.length === digits.length);
};
