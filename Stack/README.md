# 📌 **Stack (LIFO) Using Linked List**

## 📚 **What is a Stack?**

A **Stack** is a **linear data structure** that follows the **LIFO (Last-In-First-Out) principle**. This means that the last element added to the stack is the first one to be removed. Stacks are commonly used in function calls, expression evaluation, and backtracking algorithms.

---

## 🔍 **Structure and Functionality**

### 1️⃣ **Creating and Managing a Stack**

A stack can be implemented using a **linked list**, where:

- The **top** of the stack represents the most recently added element.
- Each node contains:
  1. **Data (element)**
  2. **Pointer to the next node**

Key methods:

- **`isEmpty()`** – Checks whether the stack is empty.
- **`makeEmpty()`** – Removes all elements from the stack.

---

### 2️⃣ **Insertion Operation**

- **`push(x)`** – Inserts an element at the **top** of the stack. This operation takes **O(1)** time.

#### How it works:-

1. A new node is created.
2. The new node is linked to the current top.
3. The **top** pointer is updated.

---

### 3️⃣ **Deletion Operation**

- **`pop()`** – Removes the **top** element from the stack. This operation takes **O(1)** time.

#### How it works:

1. If the stack is empty, an error is thrown.
2. The **top** node is removed.
3. The **top** pointer moves to the next node.

---

### 4️⃣ **Retrieval Operations**

- **`top()`** – Retrieves the element at the **top** without removing it.
- **`topAndPop()`** – Retrieves and removes the **top** element.

Both operations take **O(1)** time.

---

### 5️⃣ **Printing the Stack**

- **`printStack()`** – Traverses the stack and prints all elements.
- This operation takes **O(n)** time, where `n` is the number of elements in the stack.
