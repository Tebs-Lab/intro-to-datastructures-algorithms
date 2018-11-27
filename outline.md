# Computer Science Foundations -- Data Structures Short Course

This course is designed to teach students the fundamentals of data structures. Students are expected to already speak a programming language, and have surely encountered some of these data structures in the wild already. Specifically, this course examines the following data structures:

* Arrays
* Linked Lists
* Hash Tables
* Trees
* Graphs

In their general form, these data structures underlie nearly all of computer programming. Complex data structures tend to be specializations of the general form of these structures, combinations of them, or both.

Conceptual fluency in these data structures provide programmers with the arsenal to tackle a huge range of problems, and equip programmers to understand domain specific specializations of these general concepts. Perhaps more importantly, understanding how these tools helps engineers read, write, debug, and understand code the encounter in the wild.

From cryptography, to databases, to machine learning, and beyond a strong foundation in data structures equips engineers to move around within the vast computer programming landscape.

Accompanying each of these data structures is a small selection of algorithms for manipulating these data structures, specializations of the data structure, or algorithms that rely on these data structures. While the focus of this course is on conceptual fluency -- students will be asked to implement simple versions of some of these data structures in service of that goal.

## Class 1: Introduction to Complexity & Big O Notation

This lesson should give students a big picture view about why algorithms and computer science is important, as well as delve into the specifics of Big O.

### Objectives

* Students can describe how they might interact with data structures and algorithms in their future careers.
* Students know that algorithms are measured in terms of their input.
* Students can identify important complexity classes.
* Students can classify provided code or descriptions of an algorithm into the proper complexity class.

## Class 2: Linear Data Storage, Arrays and Linked Lists

This lesson teaches students about Arrays (as in C arrays) and Linked Lists.

### Objectives

* Students can describe the difference between an Abstract Data Type and an implementation
* Students can describe the difference between an Array and a Linked List
* Students can compare and contrast the speed of operations in Arrays and Linked Lists
* Students can implement and analyze a queue or stack backed by
  * A Linked List
  * An Array

## Class 3: Specialized Linear Stores -- Stacks & Queues

In this lesson students will compare the implementations of stacks and queues based on their backing data structure (array or linked list) and apply these data structures to solve problems.

### Objectives

* Students can describe stacks and queues as abstract data types
  * Especially Last In First Out (LIFO) vs First In First Out (FIFO) properties
* Students can implement and analyze a queue or stack backed by:
  * A Linked List
  * An Array
* Students can use stacks and queues to solve problems.

## Class 4: Non-Lienar, Non-Hierarchical Storage -- Hashing and Hash Tables

This lesson is about hashing and hash tables.

## Objectives

* Students can describe a Hash Function and a Hash Table
* Students can identify common uses of hash tables
* Students can classify the performance of hash table operations using big o
* Students know that collisions will occur, and that there are many ways to handle them.
  * Students can specifically define chaining and linear probing (at a high level)

This lesson is about hashing and hash tables.

## Class 5: Hierarchical Storage -- Introduction to Trees

This lesson is about trees.

## Objectives

* Students can define trees
* Students can use important tree terminology (root, leaf, child...)
* Students can identify various trees in computer programming
* Students can implement BFS and DFS on trees

## Class 6: Special Trees

This lesson is about a couple tree specializations; BSTs and Tries.

### Objectives

* Students can define binary search trees
* Students can implement binary search on a BST
* Students can identify the balance problem that AVL trees and Red-Black trees solve
* Students can define Tries
* Students can implement `valueExists` in a Trie

## Class 7: Storing Relational Data -- Introduction To Graphs

This lesson is about graphs.

### Objectives

* Students can define graphs and use graph terminology
   * node/vertex, edge, directed/undirected, weighted/unweighted
* Students can simulate BFS and DFS over graphs on whiteboard/paper
* Students can write pseudocode for BFS and DFS on graphs

## Class 8: Representing Graphs and Graph APIs

This class is about how to implement a graph API as well as how to implement BFS and DFS algorithm over a graph API.

# Objectives

* Students can describe how to use an adjacency list to represent a graph.
* Students can describe how to use nested hash tables to implement a graph.
* Students can implement BFS, DFS algorithm based on a graph API.
