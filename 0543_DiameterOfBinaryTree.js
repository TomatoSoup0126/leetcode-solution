// 543. Diameter of Binary Tree

// Given a binary tree, you need to compute the length of the diameter of the tree.The diameter of a binary tree is the length of the longest path between any two nodes in a tree.This path may or may not pass through the root.

//   Example:
// Given a binary tree
//      1
//     / \
//    2   3
//   / \
//  4   5
// Return 3, which is the length of the path[4, 2, 1, 3] or[5, 2, 1, 3].

// Note: The length of path between two nodes is represented by the number of edges between them.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let diameter = 0

  diameterFind(root)

  return diameter

  function diameterFind(node) { 
    //排除空的node    
    if (node === null) {   
      return 0
    }

    //遞迴，將左右兩邊節點置入diamterFind()
    const left = diameterFind(node.left)
    const right = diameterFind(node.right)

    //將結果重複與外側的變數diameter做大小比較並留存大者
    diameter = Math.max(diameter, left + right)

    //最大直徑應為結果應為左邊+右邊+1
    return Math.max(left, right) + 1
  }
};



