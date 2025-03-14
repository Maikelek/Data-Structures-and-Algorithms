// =========================================
// 🏗 CONSTRUCTORS & Basic Methods
// =========================================

class Node {
    constructor(elem) {
        this.elem = elem;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
    }

    /**
     * 🆕 Creates an empty linked list
     * @param {LinkedList} existingList - Existing list (if any)
     * @returns {LinkedList} - A new empty linked list
     */
    static makeEmpty(existingList) {
        if (existingList) existingList.removeList();
        return new LinkedList();
    }

    /**
     * 🗑️ Removes the entire list
     */
    removeList() {
        this.first = null;
        this.last = null;
    }

// =========================================
// 🔍 ELEMENT OPERATIONS
// =========================================

    /**
     * ❌ Deletes an element from the list
     * @param {any} x - Value to remove
     */
    delete(x) {
        if (!this.first) return;

        let prev = null;
        let current = this.first;

        while (current !== null) {
            if (current.elem === x) {
                if (current.next === null) this.last = prev; // Last element
                if (current.next === null && prev === current) this.last = null; // Only element
                if (prev === current) this.first = current.next; // First element
                else prev.next = current.next;
                return;
            }
            prev = current;
            current = current.next;
        }
    }

    /**
     * ✅ Checks if the list is empty
     * @returns {boolean} - `true` if the list is empty, otherwise `false`
     */
    isEmpty() {
        return this.first === null;
    }

    /**
     * 🔎 Checks if a node is the last in the list
     * @param {Node} node - Node to check
     * @returns {boolean} - `true` if last, otherwise `false`
     */
    static isLast(node) {
        if (!node) throw new Error("isLast: incorrect pointer on input!");
        return node.next === null;
    }

    /**
     * 🔍 Searches for an element in the list
     * @param {any} x - Value to find
     * @returns {Node|null} - Node containing the value or `null`
     */
    member(x) {
        let current = this.first;
        while (current !== null) {
            if (current.elem === x) return current;
            current = current.next;
        }
        return null;
    }

// =========================================
// ➕ INSERTION OPERATIONS
// =========================================

    /**
     * 🏁 Inserts an element at the beginning of the list
     * @param {any} x - Value to insert
     */
    insertBeg(x) {
        let newNode = new Node(x);
        newNode.next = this.first;
        if (this.isEmpty()) this.last = newNode;
        this.first = newNode;
    }

    /**
     * 🚀 Inserts an element at the end of the list
     * @param {any} x - Value to insert
     */
    insertEnd(x) {
        let newNode = new Node(x);
        if (this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
    }

// =========================================
// 📌 Nodes
// =========================================

    /**
     * 🔽 Retrieves the first node of the list
     * @returns {Node|null} - The first node or `null`
     */
    firstNode() {
        return this.first;
    }

    /**
     * ⏭️ Retrieves the next node
     * @param {Node} node - Current node
     * @returns {Node|null} - The next node or `null`
     */
    static next(node) {
        if (!node) throw new Error("next: incorrect pointer on input!");
        return node.next;
    }

    /**
     * 🎯 Retrieves the value of a node
     * @param {Node} node - Node to get value from
     * @returns {any} - The value of the node
     */
    static get(node) {
        if (!node) throw new Error("get: incorrect pointer on input!");
        return node.elem;
    }

// =========================================
// 🖨️ PRINTING AND LIST CONCATENATION
// =========================================

    /**
     * 🖨️ Prints the elements of the list to the console
     */
    printList() {
        let current = this.first;
        if (this.isEmpty()) {
            console.log("Empty list");
            return;
        }
        let output = "";
        while (current !== null) {
            output += current.elem + " ";
            current = current.next;
        }
        console.log(output.trim());
    }

    /**
     * 🔗 Quickly concatenates two linked lists
     * @param {LinkedList} L1 - First list
     * @param {LinkedList} L2 - Second list
     */
    static fastCat(L1, L2) {
        if (!L1 || !L2) return;

        if (L1.isEmpty()) {
            L1.first = L2.first;
            L1.last = L2.last;
        } else {
            L1.last.next = L2.first;
            L1.last = L2.last;
        }

        L2.first = null;
        L2.last = null;
    }

    /**
     * 🆕 Creates a new list by merging two existing lists
     * @param {LinkedList} L1 - First list
     * @param {LinkedList} L2 - Second list
     * @returns {LinkedList} - New merged list
     */
    static freshCat(L1, L2) {
        if (!L1 || !L2) return LinkedList.makeEmpty(null);

        let L3 = LinkedList.makeEmpty(null);
        let temp = L1.first;

        while (temp !== null) {
            L3.insertEnd(temp.elem);
            temp = temp.next;
        }

        temp = L2.first;
        while (temp !== null) {
            L3.insertEnd(temp.elem);
            temp = temp.next;
        }

        return L3;
    }

// =========================================
// ✂️ LIST SPLITTING
// =========================================

    /**
     * ✂️ Splits the list from a given node
     * @param {Node} P - Node from which to split
     * @returns {LinkedList} - New separated list
     */
    cut(P) {
        if (!this.first || !P) return LinkedList.makeEmpty(null);

        if (P.next === null) return LinkedList.makeEmpty(null);

        let L2 = LinkedList.makeEmpty(null);
        L2.first = P.next;

        if (this.last === P.next) {
            L2.last = L2.first;
        } else {
            L2.last = this.last;
        }

        P.next = null;
        this.last = P;

        return L2;
    }
}

// =========================================
// 🚗 Exports
// =========================================
module.exports = { Node, LinkedList };
