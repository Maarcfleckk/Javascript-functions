/**
 * #5 :: Export JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50
 * input: number (summand1)
 * input: number (summand2)
 * output: boolean
 */

/**
 * Checks whether the sum of a pair of numbers is greater than or equal to 50.
 * @param {number} summand1 - The first number to be added.
 * @param {number} summand2 - The second number to be added.
 * @returns {boolean} - Returns true if the sum is 50 or greater than 50, false otherwise.
 */
const isAdditionGreaterThanFifty = function (summand1, summand2) {
  if (typeof summand1 !== "number" || typeof summand2 !== "number") {
    return "Input must be a number";
  }
  return summand1 + summand2 > 50;
};
export default isAdditionGreaterThanFifty;
