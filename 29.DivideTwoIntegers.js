let MAX_INT = 2147483647;
let MIN_INT = -2147483648;

/**
 * @param {number} a dividend
 * @param {number} b divisor
 * @return {number}
 */

const division = (a, b) => {
  console.log(performance.now());

  let dividend = Math.abs(a);
  let divisor = Math.abs(b);
  let quotient = 0;

  if (divisor === dividend) {
    if ((a < 0 && b < 0) || (a > 0 && b > 0)) return 1;

    return -1;
  }

  if (divisor === 1) {
    if ((a < 0 && b < 0) || (a > 0 && b > 0))
      return dividend > MAX_INT ? MAX_INT : dividend;

    const res = parseInt(`-${dividend}`);
    return res < MIN_INT ? MIN_INT : res;
  }

  if (dividend < divisor) return quotient;

  let inner = 0,
    outer = 0,
    sum = 0;

  let tempinner = null;
  let tempsum = null;
  let stop = false;

  while (dividend > sum) {
    sum = divisor << outer;

    if (sum < 0) {
      outer = outer - 1;
      inner = tempinner - 1;
      sum = (divisor << outer) + (inner < 0 ? 0 : divisor << inner);
      break;
    }

    if (sum === dividend) {
      inner = -1;
      break;
    }

    if (sum > dividend) {
      outer = outer - 1;
      inner = tempinner - 1;
      sum = (divisor << outer) + (inner < 0 ? 0 : divisor << inner);
      break;
    }

    tempsum = sum;

    while (inner < outer) {
      sum = sum + (divisor << inner);
      if (sum > dividend) {
        console.log(outer, inner, tempinner);

        tempinner = inner -= 1;
        tempsum = sum = (divisor << outer) + (inner < 0 ? 0 : divisor << inner);
        stop = true;
        break;
      }
      if (sum === dividend) {
        tempsum = sum = (divisor << outer) + (inner < 0 ? 0 : divisor << inner);
        stop = true;
        break;
      }
      tempsum = sum;
      tempinner = inner += 1;
    }
    if (stop) break;

    inner = 0;
    outer++;
  }

  console.log(`
    inner: ${inner},  
    outer: ${outer},  
    sum: ${sum},  
    quotient: ${quotient},  
    1^inner: ${1 << inner},
    1^outer: ${1 << outer}  
  `);

  quotient = (1 << outer) + (inner < 0 ? 0 : 1 << inner);
  dividend -= sum;

  while (dividend >= divisor) {
    console.log("here");
    quotient += 1;
    dividend -= divisor;
  }

  console.log(performance.now());

  if ((a < 0 && b < 0) || (a > 0 && b > 0))
    return quotient > MAX_INT ? MAX_INT : quotient;

  const res = parseInt(`-${quotient}`);
  return res < MIN_INT ? MIN_INT : res;
};
console.log(division(1100540749, -1090366779));
