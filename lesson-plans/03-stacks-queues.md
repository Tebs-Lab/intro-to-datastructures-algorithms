# Stacks And Queues

In this lesson students will compare the implementations of stacks and queues based on their backing data structure (array or linked list) and think about applying these data structures to solve problems.

## Learning Objectives

* Students can implement and analyze a queue or stack backed by
  * A Linked List
  * An Array

#### REVIEW YESTERDAY'S HOMEWORK:

* __THE BIG O EXERCISES__
* __Discuss interesting bits of SinglyLinkedList__

#### Stacks (5 minutes)

* Discussion: __What are stacks?__
  * __Why are they used?__
  * __Give some examples?__
  * If I told you __"stacks are mainly for reversing things"__ what would you say?
  * __What are some examples of stacks in programming?__
  * *SIGN POSTING: We will be using these extensively in graph search.*
    * *There are some problems that can be solved just with stacks like undo/redo, but some of the most interesting algorithms use stacks as an underlying support structure!*
* A Simple ADT:
  * Push
  * Pop
  * Peak
  * Size

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

* Discussion: __What are queues?__
  * __Why are they used?__
  * __Give some examples?__
  * If I told you __"queues are mainly for reversing things"__ what would you say?
  * __What are some examples of queues in programming?__
  * *SIGN POSTING: We will be using these extensively in graph search.*
    * *There are some problems that can be solved just with queues like buffering data, but some of the most interesting algorithms use queues as an underlying support structure!*
* A Simple ADT:
  * Enqueue
  * Dequeue
  * Peak
  * Size

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

## Using an Array (15 minutes)

* __Pair Exercise: Describe how you'd use an array to implement a stack and a queue?__
  * __Describe which array methods enqueue/dequeue use to modify the internal array__
  * __Describe which array methods push/pop use to modify the internal array__
  * __What are the Big O values of these operations?__
    * __What if the array has to resize?__
* *Instructor, give pairs ~5-10 minutes to answer these questions, then discuss them all as a group*

## Using a Linked List (15 minutes)

* __Pair Exercise: Describe how you'd use a Linked List to implement a stack and a queue?__
  * __Would you use a double or single linked list?__
    * __Why?__
  * __Describe which array methods enqueue/dequeue use to modify the internal array__
  * __Describe which array methods push/pop use to modify the internal array__
  * __What are the Big O values of these operations?__
    * __Is there something equivalent to resizing?__
* *Instructor, give pairs ~5-10 minutes to answer these questions, then discuss them all as a group*

## Stacks, "reversal", The Call Stack, and Recursion

* Fundamentally, stacks are about reversing the order of things, or replaying things in reverse order.
* Matching Parens ...
  * Show the problem
  * __How can a stack be used for this??__
  * *every new opening paren == push*
  * *every new closing paren == pop and check*
  * *at the end, check that the stack is empty*
* Okay, how does the call stack work?
* Short walkthrough recursive fib?

## Class Exercises

* Parsing Arithmetic -- write your own tests or use https://leetcode.com/problems/basic-calculator/description/
* Collecting rain water -- https://leetcode.com/problems/trapping-rain-water/description/
