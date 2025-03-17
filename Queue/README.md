# **📌 Queue (FIFO) Using Linked List**  

## **📚 What is a Queue?** 

A **Queue** is a **linear data structure** that follows the **FIFO (First-In-First-Out)** principle. This means that the **first** element **added** to the queue is the **first** one to be **removed**. Queues are commonly used in scheduling, buffering, and managing resources.

---

## 🔍 **Structure and Functionality**  
### 1️⃣ **Creating and Managing a Queue**  

A queue can be implemented using a linked list where:

- The **front** of the queue represents the **first** element.
- The **rear** represents the **last** element.
- Each node contains:
- 1. **Data (element)**
- 2. **Pointer** to the next node

**Key methods:**

- **isEmpty()** – Checks whether the queue is empty.

- **makeEmpty()** – Removes all elements from the queue.

---

### 2️⃣ **Insertion Operation**  

- **enqueue(x)** – Inserts an element at the **rear** of the queue. This operation takes **O(1)** time.

How it works:

1. A **new** node is **created**.
2. **If** the queue is **empty**, **both front and rear** point to the **new** node.
3. **Otherwise**, the **new** node is linked to the **current** rear, and rear is updated.

---

### 3️⃣ **Deletion Operation**  

- **dequeue()** – **Removes** an element from the **front** of the queue. This operation takes **O(1)** time.

How it works:
1. If the **queue** is **empty**, an **error** is thrown.
2. The **front** node is **removed**.
3. The **front** pointer moves to the **next** node.
4. If the queue **becomes** **empty**, rear is **set** to **null**.

---

### 4️⃣ **Retrieval Operations**  

- **frontElem()** – Retrieves the **element** at the front **without** **removing** it.
- **frontAndDequeue()** – **Retrieves** and **removes** the **front** element.

Both operations take **O(1)** time.

---

### 5️⃣ **Printing the Queue**  

- **printQueue()** – **Traverses** the queue and **prints** all elements.
- This operation takes **O(n)** time, where **n** is the **number** of elements in the **queue**.

