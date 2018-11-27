# Graph Representations/Implementations

This class is about how to implement a graph API as well as how to implement BFS, DFS, and Dijkstra's algorithm over a graph API.

# Objectives

* Students can describe how to use an adjacency list to represent a graph.
* Students can describe how to use nested hash tables to implement a graph.
* Students can implement BFS, DFS, and Dijkstra's algorithm based on a graph API

## Representing Graphs

* Define a minimal graph API:
  * createNode, createEdge, getNodes, getNeighbors
  * The key point here is that codifying the nodes and their relationship is the important thing.
* Describe one implementation of a graph (adjacency list)
  * Mention that there are many other ways to implement a graph ADT/API
  * Edge list
  * Adjacency Matrix
  * Adjacency Hash

## Search Implementations

* Just adding an explored list to BFS and DFS from trees.
```js
function BFS(startNode, goalNode) {
  let frontier = [];
  let exploredList = {};
  frontier.push([startNode, null]);

  while (frontier.length > 0) {  
    let [currentNode, reachedFrom] = frontier.shift();

    if(currentNode === goalNode) {
      // Rebuild the path from the explored list
      let currentItr = currentNode;
      let shortestPath = [];
      while(currentItr !== null) {
        shortestPath.push(currentItr);
        currentItr = exploredList[currentItr];
      }

      return shortestPath.reverse();
    }
    else if(exploredList[currentNode] !== undefined) {
      continue;
    }

    for(let neighbor of currentNode.neighbors) {
      // NOTICE -- pushing currentNode as well as the neighbor.
      frontier.push([neighbor, currentNode]);
    }

    exploredList[currentNode] = reachedFrom;
  }

  return null; // Indicating no path exists
}
```

#### Exercises

* [Word Ladder](https://leetcode.com/problems/word-ladder/description/)
* [Number of Islands](https://leetcode.com/problems/number-of-islands/description/)
* Bonus: [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/description/)
