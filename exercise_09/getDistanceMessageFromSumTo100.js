import generateRandomNumberInRange from "../exercise_03/generateRandomNumberInRange.js";
import isAdditionGreaterThanFifty from "../exercise_05/isAdditionGreaterThanFifty.js";
/** 
 * Write JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
  - if sum result exceeds 100, then return message "Sum with value N exceeds in N from number 100"
  - otherwise, return message "Sum with value N is left in N from number 100"
 * input: number (value) 
 * output: string
 */

/**
 * CASE #1
 * input: 70
 * random (generated in function): 40
 * output: "Sum with value 110 exceeds in 10 from number 100"
 */

/**
 * CASE #2
 * input: 30
 * random (generated in function): 40
 * output: "Sum with value 70 is left in 30 from number 100"
 */

/**
 * 
 * @param {number} value 
 * @returns {string}
 */
const getDistanceMessageFromSumTo100 = function(value){
    const number = generateRandomNumberInRange(101); //if the param is 101 the limit will be 100
    const foo = isAdditionGreaterThanFifty(number, value);
    
    return foo
      ? "Sum with value " + (number + value) + " exceeds in " + (value + number - 100) + " from number 100"
      : "Sum with value " + (number + value) + " is left in " + (100 - value - number) + " from number 100";
}
export default getDistanceMessageFromSumTo100;