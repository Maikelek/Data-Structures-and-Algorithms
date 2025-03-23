/**
 * ✅ Binary Tree implementation using an array (Classic JS version).
 */
class BinaryTree {
    constructor(maxLevel) {
        this.maxLevel = maxLevel;
        this.array = new Array(Math.pow(2, maxLevel + 1)).fill(0); // Create array of size 2^(maxLevel + 1)
    }

    /**
     * ✅ Empties the tree (sets all values to 0).
     */
    makeEmpty() {
        this.array.fill(0);
    }

    /**
     * ✅ Inserts an element at the specified index.
     * @param {number} index - Position in the array (1-based index).
     * @param {number} value - Value to insert.
     */
    insert(index, value) {
        const maxSize = Math.pow(2, this.maxLevel + 1) - 1;
        if (index < 1 || index > maxSize) {
            throw new Error("Bad index!");
        }
        this.array[index] = value;
    }

    /**
     * ✅ Prints the tree in a hierarchical format.
     */
    printTree() {
        let k = 1; // Start from index 1 (root)
        const maxWidth = 4 * Math.pow(2, this.maxLevel); // Max width for spacing

        let result = "";
        for (let level = 0; level <= this.maxLevel; level++) {
            const nodesInLevel = Math.pow(2, level); // Number of nodes at this level
            const space = Math.floor((maxWidth - 2 * nodesInLevel) / nodesInLevel);

            for (let j = 0; j < nodesInLevel; j++) {
                if (j === 0) result += this.printSpaces(Math.floor(space / 2));
                else result += this.printSpaces(space);

                result += (this.array[k] !== 0
                    ? String(this.array[k]).padStart(2, "0")
                    : "--");
                k++;
            }
            result += "\n";
        }
        return result;
    }

    /**
     * ✅ Helper function to print spaces.
     * @param {number} count - Number of spaces to print.
     * @returns {string} - A string of spaces.
     */
    printSpaces(count) {
        return " ".repeat(count);
    }

    /**
     * ✅ Prints all elements at a specific level.
     * @param {number} level - The level to print (0-based).
     */
    printRow(level) {
        if (level < 0 || level > this.maxLevel) {
            throw new Error("Invalid level!");
        }

        const start = Math.pow(2, level);
        const end = Math.pow(2, level + 1) - 1;

        let result = "";
        for (let i = start; i <= end; i++) {
            result += `${this.array[i]} `;
        }
        result += "\n";
        return result;
    }

    /**
     * ✅ Prints the subtree starting from a given index.
     * @param {number} index - The index to start from (1-based).
     */
    printSubtree(index) {
        const maxSize = Math.pow(2, this.maxLevel + 1) - 1;
        if (index < 1 || index > maxSize) {
            throw new Error("Bad index!");
        }

        let result = "";

        const traverse = (i) => {
            if (i > maxSize || this.array[i] === 0) return;
            result += `${this.array[i]} `;
            traverse(2 * i); // Left child
            traverse(2 * i + 1); // Right child
        };

        traverse(index);
        result += "\n";
        return result;
    }

    /**
     * ✅ Disposes of the tree (clears the array).
     */
    disposeTree() {
        this.array = [];
    }
}