// 100. Same Tree

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  const stackP: (TreeNode | null)[] = []
  const stackQ: (TreeNode | null)[] = []

  stackP.push(p)
  stackQ.push(q)

  while (stackP.length > 0 && stackQ.length > 0) {
    const nodeP = stackP.pop()!
    const nodeQ = stackQ.pop()!

    if (!nodeP && !nodeQ) continue
    if (nodeP?.val !== nodeQ?.val) return false

    stackP.push(nodeP.left, nodeP.right)
    stackQ.push(nodeQ.left, nodeQ.right)
  }

  return true
}
