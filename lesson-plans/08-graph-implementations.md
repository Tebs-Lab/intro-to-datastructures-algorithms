# Graph Representations/Implementations

This class is about how to implement a graph API as well as how to implement BFS, DFS, and Dijkstra's algorithm over a graph API.

# Objectives

* Students can describe how to use an adjacency list to represent a graph.
* Students can describe how to use nested hash tables to implement a graph.
* Students can implement BFS, DFS algorithm based on a graph API.

## Representing Graphs (20-30 min)

* So, we already know what graphs are, abstractly. And we have already seen how they can be useful in modeling a lot of different kinds of problems. But how do we build one of these things?
* __What should our Graph API (or ADT) Be able to do?__
  * *Store nodes and edges somehow*
  * *Make new nodes*
  * *Create edges between nodes*
  * *Fetch neigbors given a node*
* __Pair/Share: Define a set of member functions for a minimal Graph API.__
  * *Absolute minimum: createNode(nodeName), createEdge(nodeNameA, nodeNameB), getNodes(), getNeighbors(nodeName)*
  * *If we want edge weights, createEdge needs to take a weight.*
* The essentials are the ability to __create and retrieve__ the relationships between things.
* __What are some ways we could store the nodes and their relationships?__
  * *There are LOTS of answers students could give... entertain those ideas!*
  * *If students come up with an Edge List, Adjacency List, Adj. Matrix, or something else with a name, congratulate them for inventing something with a name.*
  * *Use probing questions if the students are stumped:*
  * __What data-type should the nodes be? Do we need a class for that?__
    * *We do NOT need classes, though it is a sane choice if the nodes have many properties*
    * *If we use a list, whats good/bad about that?*
    * *If we use a hash table, what's good/bad about that?*
  * __How should we represent edges? Do we need a class for that?__
    * *Same, a class might be appropriate if our edges get pretty compelex*
    * *Completely overkill if the edge is just an unweighted edge with no properties.*
  * __Should the Graph or the individual nodes keep track of the neighbors?__
    * *This is a bit philosophical, either can be made to work*
    * *Try to explore some tradeoffs*
    * *The GRAPH is really the unit of interest, so it should be in control of the encapsulated data*
    * *On the other hand, it's very easy to think of Nodes HAVING edges, rather than the graph having edges*
* At this point, I want to compare two implementations of a directed, unweighted graphs
  * One using 2 lists (adjacency list)
  * One using 2 hash tables (adjacency hash)
  * This is far from an exhaustive set of ways to implement such tables.
* for both, nodes are just a name which is a string.
* With the list:
  * Graph contains a list of all the nodes (list of strings)
  * Graph contains a parallel list of lists, where the lists contain all the neighbors of the node they represent.
* For the hashes
  * Graph contains a hash table mapping node names to HASH MAPS which represent that nodes neighbors!

![simple-graph](resources/SimpleGraph.png)

```js
nodes = ['A', 'B', 'C', 'D', 'E', 'F']
edges = [
  ['B', 'C'], // neighbors of A
  ['D'],      // neighbors of B
  ['D'],      // neighbors of C
  ['E', 'F'], // neighbors of D
  ['B', 'F'], // neighbors of E
  []          // F has no neighbors
]
```

```js
nodes_and_edges = {
  // A and its neighbors
  'A': {
    'B': true,
    'C': true
  },

  // B and its neighbors
  'B': {
    'D': true
  },

  // C and its neighbors
  'C': {
    'D': true
  },

  // D and its neighbors
  'D': {
    'E': true,
    'F': true
  },

  // E and its neighbors
  'E': {
    'B': true,
    'F': true
  },

  // F has no neighbors
  'F': {}
}
```

* __Exercise: Compare the Big O cost of these operations on each of our two graphs:__
  * __Determine if a node is in the graph__
    * *Lists: Linear in terms of the number of nodes, scan the node list, O(n)*
    * *Graphs: Constant time hash lookup, O(1)*
  * __Determine if two nodes are neighbors__
    * *Lists: O(n+e) -- first we scan the list for the node of interest, then we do a constant time lookup based on the index at which we found the node, but we have to perform a linear scan there as well to find if the neighbor is there (which might be all the edges in the worst case).*
    * *Hashes: O(1) -- two constant time operations. First, lookup the first node in the main hash, then lookup the neighbor in the nested hash.*
  * __Can you think of a way in which the two lists is better?__
    * *The lists take up less memory*
    * *If we're iterating over the neighbors a lot, the lists will be more efficient during the iteration process.*
    * *But nested hash tables is honestly pretty good!*


## Search Implementations (20 min)

* The pseudocode was presented last class, students should be ready to look at some real code based on a graph API.
* Walk through this code with the students and let them ask questions.
* A major point of interest is that the frontier has the "reached from" node as well as the current node so that we can rebuild the path from the explored list at the end of the search.
* Related, the explored list is a map of nodeNames to nodeNames where the key is the node of interest, and the value is the "parent" or "reach from" node along the path found by search.

```js
function BFS(graph, startNode, goalNode) {
  let frontier = [];
  let exploredList = {};
  frontier.push([startNode, null]);

  while (frontier.length > 0) {  
    let [currentNode, reachedFrom] = frontier.shift();

    // If it's the goal, return the path!
    if(currentNode === goalNode) {
      return extractPath(exploredList, goalNode)
    }

    // If we've seen this node already, ignore it!
    else if(exploredList[currentNode] !== undefined) {
      continue;
    }

    // Add all the neighbors to the frontier
    for(let neighbor of graph.getNeighbors(currentNode)) {
      frontier.push([neighbor, currentNode]);
    }

    exploredList[currentNode] = reachedFrom;
  }

  return null; // Indicating no path exists
}

// Literally the only difference is shift changed to pop!
function DFS(graph, startNode, goalNode) {
  let frontier = [];
  let exploredList = {};
  frontier.push([startNode, null]);

  while (frontier.length > 0) {  
    let [currentNode, reachedFrom] = frontier.shift();

    // If it's the goal, return the path!
    if(currentNode === goalNode) {
      return extractPath(exploredList, goalNode)
    }

    // If we've seen this node already, ignore it!
    else if(exploredList[currentNode] !== undefined) {
      continue;
    }

    // Add all the neighbors to the frontier
    for(let neighbor of graph.getNeighbors(currentNode)) {
      frontier.pop([neighbor, currentNode]);
    }

    exploredList[currentNode] = reachedFrom;
  }

  return null; // Indicating no path exists
}

// Given an explored list as described above, get the path from start to goal.
function extractPath(exploredList, goalNode) {
  let currentItr = currentNode;
  let shortestPath = [];
  while(currentItr !== null) {
    shortestPath.push(currentItr);
    currentItr = exploredList[currentItr];
  }

  return shortestPath.reverse();
}
```

#### Exercises

* [Word Ladder](https://leetcode.com/problems/word-ladder/description/)
* [Number of Islands](https://leetcode.com/problems/number-of-islands/description/)
* Bonus: [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/description/)
