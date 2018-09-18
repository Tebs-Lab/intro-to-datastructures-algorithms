# Intro To Trees

This lesson is about trees.

## Learning Objectives

* Students can define trees
* Students can use important tree terminology
* Students can identify various trees in computer programming
* Students can implement BFS and DFS on trees

## Definitions (10 minutes)

* __What is a tree?__
  * *Define the "single path" restriction*
  * *Describe the "no cycles" property*
* __Give some examples?__
  * *The DOM*
  * *Filesystems*
  * *Org charts, family trees*
  * *"Search trees" such as BST, Trie, and B-Tree or others may come up*
* __What are trees good at?__
  * *Representing hierarchical data.*
* Introduce trees and the important terminology:
  * node, root, leaf, child/children, parent

## Search and Traversal (30 minutes)

* Search "stops" when you find the element.
* Traversal explores the whole tree before stopping.
* Both use essentially the same Algorithms
* Two main kinds: DFS, BFS.
* Go over an example of each using drawings.
* __How can we implement these algorithms?__
  * *Using stacks and queues of course!*
  * Put some pseudocode on the board:

```js
function BFS(rootNode) {
  // Check that a root node exists.
  if (rootNode === undefined) {
    return;
  }

  let queue = [];
  queue.push(rootNode);

  while (queue.length > 0) {  
    let currentNode = queue.shift()
    for(let child of currentNode.children) {
      queue.push(child);
    }

  }
}
```

* What about DFS?
  * *Just change the stack to a queue*
  * *But... there is another really cool way to use a stack called recursion!*

```js
function DFS(node, val) {
  if(node.val === val) {
    return node;
  }

  for(let node of node.children) {
    let returnedBelow = DFS(node);

    if(returnedBelow !== undefined) {
      return returnedBelow;
    }
  }

  // return undefined;
}
```

* Pretty beautifully simple right?
  * *WORK AN EXAMPLE*


## Exercises

* Implement getElementsByClassName and getElementById -- you can use BFS or DFS!
