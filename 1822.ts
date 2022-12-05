// 1822. Sign of the Product of an Array

const arraySign = (nums: number[]): number => {
  const SIZE = nums.length
  let negatives = 0

  for (let i = 0; i < SIZE; i++) {
    const num = nums[i]
    if (num === 0) return 0
    else if (num < 0) negatives++
  }

  return negatives % 2 === 0 ? 1 : -1
}

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1])) // 1
console.log(arraySign([1, 5, 0, 2, -3])) // 0
console.log(arraySign([-1, 1, -1, 1, -1])) // -1
