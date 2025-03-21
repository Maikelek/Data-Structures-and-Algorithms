/**
 * ✅ Selection Sort Algorithm -> sorting an array in ascending order.
 * The algorithm finds the minimum element in the unsorted part of the array
 * and swaps it with the first unsorted element. This process is repeated
 * until the array is sorted.
 * @param {Array} arr - The array that we want to sort.
 * @returns {Array} - The sorted array.
 */

const selectionSort = (arr) => {
    const arrLength = arr.length;
    
    for (let i = 0; i < arrLength - 1; i++) { // Loop through the array
        let minimalIndex = i; // Assume the first unsorted element is the smallest
        
        // Loop through the remaining unsorted elements to find the smallest one
        for (let j = i + 1; j < arrLength; j++) {
            if (arr[j] < arr[minimalIndex]) { // If a smaller element is found
                minimalIndex = j; // Update the index of the smallest element
            }
        }
        
        // Swap the found minimum element with the first unsorted element
        [arr[i], arr[minimalIndex]] = [arr[minimalIndex], arr[i]]; 
    }
    
    return arr; // Return the sorted array
}