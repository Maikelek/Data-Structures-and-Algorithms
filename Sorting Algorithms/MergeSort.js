/**
 * ✅ Merge Sort Algorithm -> sorting an array in ascending order.
 * This algorithm recursively splits the array into halves, sorts them,
 * and merges the sorted halves back together.
 * @param {Array} arr - The array that we want to sort.
 * @returns {Array} - The sorted array.
 */

// Function to merge two sorted subarrays
function merge(left, right) {
    let result = [];
    let leftIndex = 0; // Pointer to the current position in the left array
    let rightIndex = 0; // Pointer to the current position in the right array
  
    // Compare elements and add the smaller one to the result array
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Add the remaining elements from both left and right arrays
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  /**
   * Main Merge Sort function
   * 
   * Splits the array into two halves, recursively sorts them, and merges them back together.
   * 
   * @param {Array} arr - The array to be sorted.
   * @returns {Array} - The sorted array.
   */
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr; // An array with 0 or 1 element is already sorted
    }
  
    // Find the middle of the array and split it into two parts
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle); // Left half
    const right = arr.slice(middle); // Right half
  
    // Recursively sort both halves and merge them
    return merge(mergeSort(left), mergeSort(right));
  }
  
  