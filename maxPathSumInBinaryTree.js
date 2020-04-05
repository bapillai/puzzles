//Find the maximum path sum in a binary tree
//A path is a collection of connected nodes where no node is connected to more than two other nodes.

function maxPathSum(tree){
    const [_, maxSum] = [...findMaxSum(tree)];
    return maxSum;
  }
  
  function findMaxSum(tree){
    if(tree === null){
      return [0,0];
    }
    const [leftMaxSumAsBranch,leftMaxPathSum] = findMaxSum(tree.left);
    const [rightMaxSumAsBranch, rightMaxPathSum] = findMaxSum(tree.right);
    let maxChildSumAsBranch = Math.max(leftMaxSumAsBranch,rightMaxSumAsBranch);
    let {value} = tree;
    let maxSumAsABranch = Math.max(maxChildSumAsBranch+value,value);
    let maxSumAsRootNode = Math.max(maxSumAsABranch,maxSumAsABranch+leftMaxSumAsBranch+rightMaxSumAsBranch);
    let maxPathSum = Math.max(leftMaxPathSum,rightMaxPathSum,maxSumAsRootNode);
    return [maxSumAsABranch,maxPathSum];
  }
  