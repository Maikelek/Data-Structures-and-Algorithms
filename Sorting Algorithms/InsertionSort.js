/**
 * ✅ Insertion Sort Algorithm -> sorting an array in ascending order.
 * The algorithm takes elements one by one and inserts them into their correct position
 * in the sorted portion of the array. This process continues until the entire array is sorted.
 * @param {Array} arr - The array that we want to sort.
 * @returns {Array} - The sorted array.
 */

const insertionsort = (arr) => {
    let arrayLength = arr.length;

    for (let i = 1; i < arrayLength; i++) { // Start from the second element
        let currentElement = arr[i]; // Store the current element
        let sortedIndex = i - 1; // Index of the last element in the sorted portion

        // Shift larger elements to the right to make space for the current element
        while (sortedIndex >= 0 && arr[sortedIndex] > currentElement) {
            arr[sortedIndex + 1] = arr[sortedIndex]; // Move element one position to the right
            sortedIndex--;
        }

        // Insert the current element at the correct position
        arr[sortedIndex + 1] = currentElement;
    }

    return arr; // Return the sorted array
}

// Test
console.log(insertionSort([64, 25, 12, 22, 11])); // [11, 12, 22, 25, 64]
