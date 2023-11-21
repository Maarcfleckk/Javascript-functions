/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */

/**
 * Checks whether one number is greater than a given number.
 * @param {number} value - The number to check.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean|string} - True if the number is greater than the threshold, "Input must be a number" otherwise.
 */
const isGreaterThan = function (value, threshold) {
  if (typeof value !== "number" || typeof threshold !== "number") {
    return "Input must be a number";
  }
  return value > threshold;
};

export default isGreaterThan;
