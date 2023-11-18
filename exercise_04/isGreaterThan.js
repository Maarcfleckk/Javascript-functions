/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */

/**
 *
 * @param {number} value
 * @param {number} threshold
 * @returns
 */
const isGreaterThan = function (value, threshold) {
  if (typeof value !== "number" || typeof threshold !== "number") {
    console.log("Input must be a number");
  }
  return value > threshold;
};

export default isGreaterThan;
