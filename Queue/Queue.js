// =========================================
// 🏗 CONSTRUCTORS & Basic Methods
// =========================================

class Node {
    constructor(elem) {
        this.elem = elem;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    // =========================================
    // ✅ BASIC OPERATIONS
    // =========================================

    /**
     * ✅ Checks if the queue is empty
     * @returns {boolean} - `true` if empty, otherwise `false`
     */
    isEmpty() {
        return this.front === null;
    }

    /**
     * ➕ Inserts an element at the end of the queue
     * @param {any} elem - Value to insert
     */
    enqueue(elem) {
        const newNode = new Node(elem);
        if (this.isEmpty()) {
            this.front = newNode;
        } else {
            this.rear.next = newNode;
        }
        this.rear = newNode;
    }

    /**
     * ❌ Removes an element from the front of the queue
     * @returns {any} - The removed element
     * @throws {Error} - If the queue is empty
     */
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Dequeue: queue is empty!");
        }
        const temp = this.front;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        }
        return temp.elem;
    }

    /**
     * 🔍 Retrieves the front element without removing it
     * @returns {any} - The front element
     * @throws {Error} - If the queue is empty
     */
    frontElem() {
        if (this.isEmpty()) {
            throw new Error("Front: queue is empty!");
        }
        return this.front.elem;
    }

    /**
     * 🔄 Retrieves and removes the front element
     * @returns {any} - The removed front element
     */
    frontAndDequeue() {
        return this.dequeue();
    }

    /**
     * 🗑️ Empties the queue
     */
    makeEmpty() {
        while (!this.isEmpty()) {
            this.dequeue();
        }
    }

    // =========================================
    // 🖨️ PRINTING AND DISPLAY
    // =========================================

    /**
     * 🖨️ Prints the queue elements to the console
     */
    printQueue() {
        if (this.isEmpty()) {
            console.log("Empty queue");
            return;
        }
        let current = this.front;
        let output = "";
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
module.exports = { Node, Queue };