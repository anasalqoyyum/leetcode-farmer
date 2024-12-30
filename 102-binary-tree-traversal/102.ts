class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const ans: number[][] = [];
  const q: TreeNode[] = [root];

  while (q.length) {
    const node: number[] = [];
    const nextQueue: TreeNode[] = [];
    for (const { val, left, right } of q) {
      node.push(val);
      left && nextQueue.push(left);
      right && nextQueue.push(right);
    }
    ans.push(node);
    q.splice(0, q.length, ...nextQueue);
  }

  return ans;
}
