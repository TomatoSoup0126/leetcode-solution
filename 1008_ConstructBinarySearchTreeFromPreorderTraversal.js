// 1008. Construct Binary Search Tree from Preorder Traversal
// Return the root node of a binary search tree that matches the given preorder traversal.

// (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

// Example 1:

// Input: [8, 5, 1, 7, 10, 12]
// Output: [8, 5, 10, 1, 7, null, 12]

// Note:

// 1 <= preorder.length <= 100
// The values of preorder are distinct.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

//TreeNode 構築式
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

//遞迴，將node和值製作成BST
function buildBST(root, val) {
  //node本身是null，直接製作新TreeNode
  if (!root) {                        
    return root = new TreeNode(val)
  }

  //有值的話比大小，大於放右邊，小於放左邊，繼續進行下一次遞迴比較
  if (root.val > val) {
    root.left = buildBST(root.left, val)
  } else {
    root.right = buildBST(root.right, val)
  }

  return root
}
var bstFromPreorder = function (preorder) {
  //初始化result，放入第一個node
  let result = new TreeNode(preorder[0])

  //for迴圈，遍歷preorder
  for (let i = 1; i < preorder.length; i++) {

    buildBST(result, preorder[i])

  }

  return result
};





