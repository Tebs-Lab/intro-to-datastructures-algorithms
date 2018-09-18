# Implementation Details of Linear Structures

This lesson teaches students about Arrays (as in C arrays) and Linked Lists.

# Learning Objectives

* Students can describe the difference between an Abstract Data Type and an implementation
* Students can describe the difference between an Array and a Linked List
* Students can compare and contrast the speed of operations in Arrays and Linked Lists
* Students can implement and analyze a queue or stack backed by
  * A Linked List
  * An Array

## Abstract Data Type vs Implementation (5 minutes)

* __Socratic: What is the difference between an abstract data type and an implementation of a data type?__
  * *Crucial that students can see how we can define desired behavior without specifying HOW that behavior is achieved.*
  * *Lean on last class: multiplication is abstract, Russian Peasant & Lattice are implementations.*
* __Socratic: What makes ADT's valuable to us as programmers?__
  * "Test the interface, not the implementation"

## Dynamic Array Sample Implementation (20 minutes)

* __Socratic: At the C (the language) level, what is an array?__
  * *Contiguous blocks of memory, with a known size for each item*
  * *We get a pointer to the start of that memory block*
* __Everyone Draws: A diagram that represents this concept of an array__
  * __Share: describe your diagram to your neighbor__
  * *Esp. if there is still a lot of confusion, draw your own diagram and explain it to the students*
* Implementations build on this simple idea, and add some other "known memory locations" for example, to store the length of the array.
* __Socratic: So what happens when we try and insert data after the last index?__
  * Raise an error...
* But "dynamic arrays" do something different. Instead of throwing an error, they ask the OS for more memory and copy the values to the new enlarged memory space!
* __Discuss:__
  * __What are some decisions you'd have to make at resize time?__
  * __Will the new memory location start at the same place as the old one?__
  * __What if there isn't enough memory?__
  * __How much more memory should we get?__

## Linked List Implementation Details (20 minutes)

* A Linked List is a series of nodes connected by pointers
* Every node knows which piece of data comes after (and before) it
* Reordering data is a matter of changing the pointers
* Head and Tail are our "entry points" to the data
* __Discuss:__
  * __would we ever want to not have a tail or head?__
  * __what are some advantages to single vs double linkage?__
  * __Compare these to arrays in terms of Big O and important operations.__
  * *Make sure to discuss inserting on both ends, in the middle, access by index, and removal*
* __Pair/Share: Array's are "contiguous blocks of memory", how would you describe a linked lists memory usage?__
  * __Draw a diagram that contrasts these two models__
  * __What are the pros and cons of this more 'flexible' memory model?__
* Homework (and some time at the end of this class) will be to implement the following:
  * __Give students a chance to ask questions about this API__

```
LinkedList {
    constructor();
    addLeft();  // often called enq
    addRight(); // often called push
    removeLeft(); // often called deq
    removeRight()) // often called pop
    insert(idx);
    remove(idx);
    reverse();
    size();
}

Node {
  value;
  next;
  previous;
}
```

## Comparing Performance (10-15 minutes)

* For each, ask students to (in pairs) define the big O of these operations in both Arrays and Linked Lists:
  * addRight()
  * addLeft()
  * insert(i)

## Closing Thoughts

* Memory usage has a significant impact, even though linked lists have some favorable complexity O(1) for many operations, they are not used because of the way computer memory works.
  * This is another example of a place where Big O breaks down a little bit.
* Objects, Arrays, and other data types in JavaScript are *very complex* -- they are combinations of c-arrays, linked lists, hash tables, and more. For example:

```js
let a = [];
a[100000000] = 2;
```

* a is now a hash table, not an array.

## Class Exercises

* Implement a singly linked list, in REPL.it
