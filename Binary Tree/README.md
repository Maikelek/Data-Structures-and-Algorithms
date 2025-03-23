# 📌 **Binary Tree Using Array**

## 📚 **What is a Binary Tree?**

A **Binary Tree** is a hierarchical data structure where each node has at most two children referred to as the **left child** and **right child**. It's widely used in searching, sorting, and representing hierarchical relationships.

---

## 🔍 **Structure and Functionality**

### 1️⃣ **Creating a Binary Tree**

A **binary tree** can be implemented using an **array** where:

- The **root** of the tree is located at index `1` (not `0`, as we’re using a 1-based index).
- For any node at index `i`:
  - The **left child** is at index `2 * i`.
  - The **right child** is at index `2 * i + 1`.

#### Methods:

- **`constructor(maxLevel)`** – Initializes the tree with the specified depth (`maxLevel`) and creates an array of size `2^(maxLevel + 1)` to store the tree nodes.

---

### 2️⃣ **Emptying the Tree**

- **`makeEmpty()`** – Clears all values in the tree, effectively resetting the tree.

---

### 3️⃣ **Inserting an Element**

- **`insert(index, value)`** – Inserts an element at a specific index (1-based) in the array representing the tree. 
  - It ensures that the index is within bounds (between `1` and `2^(maxLevel + 1) - 1`).

---

### 4️⃣ **Printing the Tree**

- **`printTree()`** – Prints the tree in a **hierarchical format**. The root is printed at the top, and the children are printed below in a visually structured way.

  - The tree is displayed level by level, with appropriate spacing to show the relationships between the nodes.

---

### 5️⃣ **Retrieving Nodes at a Specific Level**

- **`printRow(level)`** – Prints all elements at a specific level (0-based index). 
  - It calculates the **start** and **end** index for the nodes at that level, ensuring it handles all nodes correctly for the given level.

---

### 6️⃣ **Printing a Subtree**

- **`printSubtree(index)`** – Prints the entire subtree starting from a given index. It recursively traverses the tree from that index, printing all nodes and their descendants.

---

### 7️⃣ **Disposing the Tree**

- **`disposeTree()`** – Clears the tree by emptying the array and releasing the tree structure.

---