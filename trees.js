function Node (value, left, right) {
  this.value = value;
  this.left = null || left;
  this.right = null || right;
}

var node1 = new Node(1, null, null);
var node2 = new Node(2, null, null);
var node3 = new Node(3, null, null);
var node4 = new Node(4, null, null);
var node5 = new Node(5, null, null);
var node6 = new Node(6, null, null);
var node7 = new Node(7, null, null);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
/*
Creates a tree of form
     1
   /   \
  2     3
 / \   / \
4   5 6   7
*/


//takes a root node and performs a breadthfirst traversal and pushes nodes into an array;
// ==> result = [1,2,3,4,5,6,7]
Node.prototype.BFTrav = function(callback) {
  //creates a queue of nodes to traverse
  var queue = [];
  queue.push(this);
  //while there are elements in the queue, keep traversing.
  while (queue.length !== 0) {
    var curr = queue.shift();
    callback(curr.value);
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }
}
// BFTrav test should result in console.logs for 1,2,3,4,5,6,7
// node1.BFTrav(function(val) {
//   console.log(val);
// })
