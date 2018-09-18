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

## Class 1: Abstractions, Memory, and Linear Data Structures

In this class students will become (more) familiar with Big O notation and complexity theory. Students will learn about the most common complexity classes and order them from fast to slow, practice classifying code samples using Big O. Finally, students will wrestle some with the physical aspects of computer memory, and what it really means to have a collection of data by comparing and contrasting Arrays and Linked Lists.

Themes:

* Algorithms are measured in terms of their input
* Computer programming relies heavily on abstractions.
* Our physical memory abstraction: a "block of continuous bits"
* Pointers, references, and primitives all reside in the same memory.

Students should be able to:

* Identify important complexity classes.
* Classify provided code into the proper complexity class.
* Describe pointers as indexes into "memory".
* Describe the difference in structure between an array and a linked list.
* Contrast the implementation of crucial operations in arrays vs linked lists, including performance implications:
  * Append, pop
  * Prepend, unshift
  * Insert, remove

Suggested work:

* Implement a linked list?

## Class 2: Specialized Linear Stores -- Stacks, Queues, Hash Tables

In this class students will learn about the power of assumptions and limitations. Stacks, queues, and hash tables are limited versions of arrays (or possibly linked lists for stacks/queues) but those limitations give programmers the ability to make assumptions about the order of the data within them. These limitations have incredible and powerful consequences.

Themes:

* Limitations are really strengths because they let us make assumptions about our data.
* Specific implementation details impact the performance characteristics of abstract data types.

Students should be able to:

* Compare and contrast implementations of stacks/queues using arrays/linked lists.
* Use stacks and queues to solve problems, and analyze their performance.
* Describe the purpose of a hash function, and the crucial characteristics of an ideal hash function:
  * Deterministic, probabilistically unique, uniformly distributed.
* Describe the process of inserting into a hash table.
* Solve problems using hash tables, and analyze their performance.

Suggested work:

* Implement a simple text editor API including undo/redo.
* Parse arithmetic and apply the order of operations correctly.
* Implement a stack and queue backed by an array. (should be very easy)
* Count items in a list.

## Class 3: Hierarchical Data -- Trees

In this class students are introduce to trees. Trees are a wildly popular data structure, found in The DOM (web), file systems, org charts and other social hierarchies, indexing systems (B-tree), and more. We examine the general usefulness of trees, a small sample of tree algorithms (breadth first search, depth first search), and a couple common specializations (Binary Search Tree, and Trie).

Themes:

* Lots of real world problems have hierarchical features.
* Creating "artificial" hierarchy can be a powerful tactic to help solve a problem (BST & Trie are examples of this)
* Trees and recursion have a very close relationship.

Students should be able to:

* Identify data and real world problems that can be modeled by trees.
* Describe the connection between recursion and trees.
* Implement simple trees from scratch.
* Implement BFS and DFS on trees.
* Describe a binary search tree.
* Describe a connection between "search trees" (BST and Trie are examples) and hash tables.

Suggested Work:

* Implement BFS or DFS on The DOM.
  * getById, then try querySelectorAll for a challenge.

## Class 4: Connected Data -- Graphs

In this class students are introduced to Graph Theory. Graphs are by far the most flexible of the fundamental data stores. In fact, trees and linked lists are just limited version of graphs. Students have learned previously that limitations are powerful, now we will see that flexibility has it's benefits. Graphs can be used to model just about any problem, and we will spend a lot of our time practicing the skill of translating real world problems into the language of Graph Theory.

Themes:

* Graphs are extremely flexible as long as you let yourself think flexibly.
* Real world problems frequently involve relationships between things -- graphs are the mathematics of relationships between things.

Students should be able to:

* Compare and contrast trees and graphs.
* Identify *many* examples of graphs in programs they have used.
* Model real world problems using graph theory.
* Describe at least one way a graph might be implemented.
* Implement BFS and DFS on a provided graph API.

Suggested Work:

* Finding islands
* Word Ladder
* Kinghts tour
* Solve a maze
