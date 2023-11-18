/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */

/**
 * Checks whether a collection has elements by examining its length.
 * @param {array} collection - The input array (collection).
 * @returns {boolean} - Returns true if the collection is not empty, false if it's empty.
 */
const checkCollectionHasElements = function (collection) {
    if (!Array.isArray(collection)) {
        console.log("Input must be an array");
    }
    return collection.length > 0;
};
export default checkCollectionHasElements;