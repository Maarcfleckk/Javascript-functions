/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */

const isGreaterThan = function isGreaterThan(value, threshold){
    if (typeof value !== "number" || typeof threshold !== "number") {
        console.log("Input must be a number");
    }
    if(value > threshold){
        return value + " is greater than " + threshold;
    }
    if(value < threshold){
        return value + " is smaller than " + threshold;
    }
    return value+" is equal to "+threshold;
}

export default isGreaterThan;