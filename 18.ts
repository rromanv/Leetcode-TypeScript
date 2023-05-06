const fourSum = (numbers: number[], target: number): number[][] => {
  const results: number[][] = []
  if (numbers.length < 4) return results

  numbers.sort((a, b) => a - b)

  const uniqueCombinations = new Set()

  for (let idx1 = 0; idx1 < numbers.length - 3; idx1++) {
    for (let idx2 = idx1 + 1; idx2 < numbers.length - 2; idx2++) {
      let left = idx2 + 1
      let right = numbers.length - 1

      while (left < right) {
        const sum =
          numbers[idx1] + numbers[idx2] + numbers[left] + numbers[right]

        if (sum < target) {
          left++
        } else if (sum > target) {
          right--
        } else {
          const combination = `${numbers[idx1]}${numbers[idx2]}${numbers[left]}${numbers[right]}`
          if (!uniqueCombinations.has(combination)) {
            results.push([
              numbers[idx1],
              numbers[idx2],
              numbers[left],
              numbers[right],
            ])
            uniqueCombinations.add(combination)
          }
          left++
          right--
        }
      }
    }
  }
  return results
}
console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
console.log(fourSum([2, 2, 2, 2, 2], 8))
console.log(
  fourSum(
    [
      -500, -499, -486, -474, -470, -462, -426, -426, -411, -409, -366, -361,
      -359, -355, -350, -349, -303, -297, -255, -238, -222, -215, -203, -201,
      -198, -193, -193, -187, -179, -156, -150, -139, -99, -93, -87, -58, -54,
      -8, -2, 1, 5, 6, 8, 9, 15, 31, 37, 48, 50, 95, 128, 181, 201, 206, 235,
      244, 251, 272, 285, 287, 289, 305, 308, 338, 357, 367, 386, 391, 392, 395,
      395, 402, 410, 449, 458, 466, 478, 485, 488,
    ],
    -2701,
  ),
)
