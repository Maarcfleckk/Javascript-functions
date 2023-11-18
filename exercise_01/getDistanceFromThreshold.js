/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */

/**
 * Calculates the distance of a number from a threshold.
 * @param {number} base - The input number.
 * @param {number} threshold - The target threshold.
 * @returns {number} - The distance from the threshold.
 */
const getDistanceFromThreshold = function (base, threshold) {
    if (base > threshold) {
        return base - threshold;
    }
    if (base < threshold) {
        return threshold - base;
    }
    return 0; // If base is equal to threshold
};

export default getDistanceFromThreshold;