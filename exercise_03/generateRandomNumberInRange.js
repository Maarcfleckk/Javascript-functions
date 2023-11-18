/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 * Generates a rounded random number within the specified range.
 * @param {number} limit - The upper limit for the random number (exclusive).
 * @returns {number} - The generated random number.
 */
const  generateRandomNumberInRange = function (limit) {
  if (typeof limit !== "number") {
    console.log("Input must be a number");
  }

  let randomNumber = Math.random() * limit;
  let roundedRandomNumber = Math.round(randomNumber);
  return roundedRandomNumber;
}

export default generateRandomNumberInRange;
