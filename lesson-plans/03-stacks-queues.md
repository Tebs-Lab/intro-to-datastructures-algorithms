# Stacks And Queues

In this lesson students will compare the implementations of stacks and queues based on their backing data structure (array or linked list) and apply these data structures to solve problems.

## Learning Objectives

* Students can describe stacks and queues as abstract data types
  * Especially Last In First Out (LIFO) vs First In First Out (FIFO) properties
* Students can implement and analyze a queue or stack backed by:
  * A Linked List
  * An Array
* Students can use stacks and queues to solve problems.

#### Stacks (5 minutes)

* __What are stacks?__
  * *Stacks are a Last In First Out data structure.*
  * *Like a stack of plates, once you've put something on top you have to take it out before you can get the bottom plate.*
* __Why are they used?__
  * *They are commonly used when you need to "reverse" something*
  * *Also when we need a log of what has happened*
* __what are some examples?__
  * *undo/redo in text editors is a good example*
  * *The Call Stack is a great example—we call a series of functions then have to back out*
  * *Depth first search uses a stack, as we'll see later in the course*
* A minimal stack abstract data type could have 4 methods:
  * Push
  * Pop
  * Peak
  * Size
* We can very easily use an array to create a Stack class in JavaScript:

```js
class Stack {
  constructor() {
    this._array = [];
  }

  size() {
    return this._array.length;
  }

  push(val) {
    this._array.push(val);
  }

  pop() {
    return this._array.pop();
  }

  peak() {
    return this._array[this._array.length - 1];
  }
}
```


## Queues (5 minutes)

* __What are queues?__
  * *The opposite of a stack, they maintain the order rather than reverse it*
  * *First in first out*
  * *Like a line at the store or anywhere humans line up*
* __Why are they used?__
  * *To maintain a list of things and keep them in order*
* __Give some examples?__
  * *The JS Event Queue, and process queuing in general*
  * *Breadth First Search, as we'll see*
  * *Buffering data*
  * *Routers use Queues to prioritize routing internet traffic in the order it arrives*
* A Simple ADT:
  * Enqueue
  * Dequeue
  * Peak
  * Size
* Again: easy to implement using a JS array:

```js
class Queue {
  constructor() {
    this._array = [];
  }

  size() {
    return this._array.length;
  }

  enqueue(val) {
    this._array.unshift(val);
  }

  dequeue() {
    return this._array.pop();
  }

  peak() {
    return this._array[this._array.length - 1];
  }
}
```

## Using an Array (5-15 minutes)

* *Have students answer, then go over the answers as a class*
* __Pair Exercise: Using the implementations above answer the following:__
  * __What are the Big O values of push/pop and enqueue/dequeue in this implementation?__
    * Push: O(1)
    * Pop: O(1)
    * Enqueue: O(n) (have to shift everything over one)
    * Dequeue: O(1)
    * *Don't forget: What if the array has to resize? These are all amortized constant time, not strictly constant time.*

## Using a Linked List (5-15 minutes)

* *Have students answer, then go over the answers as a class*
* __Pair Exercise: Describe how you'd use a Linked List to implement a stack and a queue?__
  * *It would look very similar to the code above, because LinkedLists and Arrays share an Abstract Data Type!!*
  * __What are the Big O values of push/pop and enqueue/dequeue in this implementation?__
    * Push: O(1)
    * Pop: O(1)
    * Enqueue: O(1)
    * Dequeue: O(1)
    * *Unlike the array, these are truly constant, not amortized constant*

## Exercises

* Required: [Valid Parens](https://leetcode.com/problems/valid-parentheses/)
* Required: [Implement a Stack Using Queues](https://leetcode.com/problems/implement-stack-using-queues/description/)
* Easier Bonus: [Trapping rain water](https://leetcode.com/problems/trapping-rain-water/description/)
* Challenging Bonus: [Parsing Arithmetic](https://leetcode.com/problems/basic-calculator/description/)
* Note: Students will have to use queues/stacks to implement BFS/DFS later in the course. Both challenge problems are better suited for stacks.
