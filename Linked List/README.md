# 📌 **Linked List**  

## 📖 **What is a Linked List ?**  
A **Linked List** is a **dynamic data structure**  that consists of **nodes**. Each node contains these things:

1. **Element (data)** – stores the value.  
2. **A pointer to the next node (pointer => reference)** – links elements together.  

Linked lists allow efficient **insertion and removal** of elements without changing the order.

---

## 🔍 **Structure and Functionality**  
### 1️⃣ **Creating and Managing a Linked List**  
Here are the basic functions used to create a classic structure and manage it:

- **`makeEmpty()`** – Creates an empty linked list by setting the first and last nodes to `null`.  
- **`removeList()`** – Clears the entire list by removing all references to its nodes.  
- **`isEmpty()`** – Checks if the list contains any elements.  

These functions make handling more **efficient** by allowing nodes to be added and removed dynamically.

---

### 2️⃣ **Insertion Operations**  
Elements can be inserted at different positions in a linked list:

- **`insertBeg(x)`** – Inserts an element at the **beginning** of the list (`O(1)`).  
- **`insertEnd(x)`** – Inserts an element at the **end** of the list (`O(1)` if a reference to the last node is maintained).  

Since inserting at the beginning takes **constant time (`O(1)`)**, it is useful for **stack operations**, where the last inserted element is the first to be removed (*Last-In-First-Out* or **LIFO**).

---

### 3️⃣ **Deletion Operations**  
Removing elements is a key operation in a linked list:

- **`delete(x)`** – Removes the first occurrence of a given value from the list.  
- **`cut(P)`** – Splits the list at a specific node `P`, creating two separate lists.  

Deletion takes **linear time (`O(n)`)** in the worst case, as the list must be traversed to find the element unless a direct reference is available.

---

### 4️⃣ **Searching and Traversal**  
Linked lists need to be traversed to access elements:

- **`member(x)`** – Checks if a given value exists in the list.  
- **`firstNode()`** – Returns a pointer to the first node.  
- **`next(P)`** – Returns a pointer to the next node in the list.  

Searching in a linked list takes linear time **(O(n))** because its elements are not stored in contiguous memory.

---

### 5️⃣ **Concatenation and Splitting**  
Linked lists can be efficiently combined or divided:

- **`fastCat(L1, L2)`** – Joins two lists by linking the last node of `L1` to the first node of `L2` in `O(1)`.  
- **`freshCat(L1, L2)`** – Creates a new list containing elements from `L1` and `L2`, taking `O(n)`.  
- **`cut(P)`** – Splits the list from node `P`, resulting in two separate lists.  

Concatenation is particularly useful for **queue-based structures**, where new elements are continuously added at the end (*First-In-First-Out* or **FIFO**).
