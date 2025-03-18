// =========================================
// 🏗 CONSTRUCTORS & Basic Methods
// =========================================

class Node {
    constructor(elem) {
        this.elem = elem;
        this.next = null;
    }
}

class LStack {
    constructor() {
        this.first = null;
        this.last = null;
    }

    // =========================================
    // ✅ BASIC OPERATIONS
    // =========================================

    /**
     * ✅ Checks if the stack is empty
     * @returns {boolean} - `true` if empty, otherwise `false`
     */
    isEmpty() {
        return this.first === null;
    }

    /**
     * ➕ Inserts an element at the top of the stack
     * @param {any} elem - Value to insert
     */
    push(elem) {
        const newNode = new Node(elem);
        if (this.isEmpty()) {
            this.first = newNode;
        } else {
            newNode.next = this.first;
        }
        this.first = newNode;
        if (this.last === null) {
            this.last = newNode;
        }
    }

    /**
     * ❌ Removes the top element from the stack
     */
    pop() {
        if (this.isEmpty()) {
            return;
        }
        const topNode = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
    }

    /**
     * 🔍 Retrieves the top element without removing it
     * @returns {any} - The top element
     * @throws {Error} - If the stack is empty
     */
    top() {
        if (this.isEmpty()) {
            throw new Error("Top: stack is empty!");
        }
        return this.first.elem;
    }

    /**
     * 🔄 Retrieves and removes the top element
     * @returns {any} - The removed top element
     */
    topAndPop() {
        if (this.isEmpty()) {
            throw new Error("TopAndPop: stack is empty!");
        }
        const topElem = this.first.elem;
        this.pop();
        return topElem;
    }

    /**
     * 🗑️ Empties the stack
     */
    makeEmpty() {
        while (!this.isEmpty()) {
            this.pop();
        }
    }

    // =========================================
    // 🖨️ PRINTING AND DISPLAY
    // =========================================

    /**
     * 🖨️ Prints the stack elements to the console
     */
    printStack() {
        if (this.isEmpty()) {
            console.log("Empty stack");
            return;
        }
        let current = this.first;
        let output = "Top> ";
        while (current !== null) {
            output += current.elem + " ";
            current = current.next;
        }
        console.log(output.trim());
    }
}

// =========================================
// 🚗 Exports
// =========================================
module.exports = { Node, LStack };
