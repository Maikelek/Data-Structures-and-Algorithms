/**
 * ✅ Bubble sort Algorithm -> sorting an array in ascending order.
 * The algorithm compares each element with the next one and swaps them if they are on wrong positions.
 * This process is repeated until the array is sorted.
 * @param {Array} arr - The that we want to sort.
 * @returns {Array} - The sorted array.
 */

const bubbleSort = (arr) => {
    let temp;
    let sorting = true;
    
    while (sorting) {
        sorting = false; // Assume the array is already sorted
        
        for (let i = 0; i < arr.length - 1; i++) {  // Decrease the index by 1 to avoid errors
            if (arr[i] > arr[i+1]) {
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                sorting = true;  // If swap was needed, set sorting to true to continue
            }
        } 
        
        console.log(arr); // Display the current state of the array after each pass
    }
    
    return arr;  // Return the sorted array
}