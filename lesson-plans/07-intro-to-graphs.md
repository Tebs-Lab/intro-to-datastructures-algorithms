* Introduce graphs and identify *several* examples of when they are used.
  * Social networks
  * The Internet (PageRank and hyperlinks)
  * The Internet again (Routing algorithms and physical infrastructure)
  * Google Maps
  * Graph databases
* Define critical graph terminology:
  * node/vertex
  * edge
  * directed/undirected
  * weighted/unweighted
  * And more: nodes can have any kinds properties, edges can be labeled with more than numeric values, a single graph could have many kinds of edges...
  * nearly infinite flexibility exists, but restrictions are still powerful!
* Define a process for modeling a problem using graph theory
  * What are the nodes?
    * Do they need any properties? what properties?
  * What are the edges?
    * Directed/undirected?
    * weighted/unweighted?
    * Do they need any other properties?
  * What feature of the graph would be a solution to this problem? (often a path)

## Define BFS and DFS for Graphs.

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

## Exercises

* Modeling problems using graphs -- in groups then as a class for each one:
* The goal here is not to write code, but to define the nodes, edges, properties of the graph, and what constitutes a solution.
  * Google Maps/Path Planning (roads, intersections, and addresses)
  * 5 Degrees to [wikipedia article] (following hyperlinks)
  * Die hard jugs problem (state machines)

  * Word Ladders (changing characters)
  * Pancake flipping sorting
  * Knights Tour
