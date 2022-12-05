// 836. Rectangle Overlap

const isRectangleOverlap = (rec1: number[], rec2: number[]): boolean => {
  const [x1, y1, x2, y2] = rec1
  const [x3, y3, x4, y4] = rec2

  return x1 < x4 && x2 > x3 && y1 < y4 && y2 > y3
}

console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3])) // true
console.log(isRectangleOverlap([7, 8, 13, 15], [10, 8, 12, 20])) // true
