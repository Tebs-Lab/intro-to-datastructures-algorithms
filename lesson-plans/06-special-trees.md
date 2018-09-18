## Binary search trees (10 minutes)

* Left always less than node, right always more than node, no duplicates.
* These are a search-able hierarchy for representing sorted data.
* __everyone draws__: a valid binary search tree with at least 10 nodes.
  * *Invite one student to draw theirs on the board*
* __mob code__: the psudo code for binary search on a BST.
* __Pair/share__: Describe the process for converting a sorted array to a binary search tree.
  * __Hint: use recursion and binary search...__

*KEY INSIGHT: BSTs are fundamentally about taking a linear data structure (sorted array) and storing them in a way that makes searching them easy/fast. Data structures are all about giving us the power to make assumptions about our data, we'll be looking at more data structures that 'order' or 'partially order' the data.*

## Problems with BST, and BigO (10 minutes)

* __Instructor draws a sorted linked list__
  * __discuss__: is this a binary search tree?
  * __whats the big O of searching in this BST?__
  * __Does that jive with what we learned about binary search??__
* Being properly "balanced" is crucial to the value of a BST.
* Simplest way to balance?
  * In order traversal -> sorted array
  * Rebuild using the "pluck center" algorithm you all created in the previous step.
  * __Whats the big o of this strategy?__
  * __When would we decide to "rebalance"?__
  * __Can we do better?__

> It may be worth mentioning that there are "self balancing binary search trees", but it's not worth our time right now to dive into the details of them. Ambitious students can be told about Red/Black trees and AVL trees

## Traversal Intro (5 minutes)

*To better explore the concept of 'ordered data' in a BST we're going to perform some traversals*

* A traversal is the exploration of every node in the tree
* Traversals are often done from "left" to "right" though that does not HAVE to be the case.
* Traversals are typically "depth first" or "breadth first"
* BFS uses Queues, DFS uses stacks.
* Pre/Post/In order for DFS

*KEY INSIGHT: we use linear data structures to linearly process hierarchical data! The key value in most of the simple data-structures that we've seen up until now is that we can use them to simplify more complex data structures into processes that we really know and understand.*

### In Order Traversal Exercise (15 minutes)

* __With a pair, write a function that will print the items of a BST in order__

## Tries (5 minutes)

* BST's are trees with specially ordered data that make it quick to search for numbers.
* Tries are trees with specially ordered data that make it quick to search for words.
* Each node is a letter, and each edge denotes the next letter in a word.
* *Draw an example with words: cat, car, cannon, bat, bar, binary*
* I don't want to get to far into the weeds with Tries, but I want to make a note here that BSTs and Tries are both used as possible indexing strategies in a database (along with hashing strategies)
* This is a very popular data structure for auto-complete as well as spell-check algorithms!

## DAGS (5 minutes)

* Dags are like trees in that they cannot contain cycles, but they are not like trees in that you can reach a node more than one way, and that there might not be a single "root" but multiple "sources"
* Dependency mapping is a common use of this data structure
  * in code, and also university courses for example.

## Exercises

* Continue working on search implementations -- unlikely that they've finished.
